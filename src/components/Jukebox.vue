<template>
  <div>
    <div class="jukebox-item" v-if="running">
      <audio ref="idlePlayer" loop src="http://music.163.com/song/media/outer/url?id=478507889.mp3" />
      <audio ref="player" src="" @ended="audioEnded" @timeupdate="updatePlayer" />
      <div class="jukebox-item">
        <div class="jukebox-info">输入"点歌" + 歌名进行点歌</div>
        <div class="jukebox-info" v-if="isIdle">当前点歌列表为空</div>
        <div class="jukebox-info" v-else>
          <div>
            <span class="jukebox-info">正在播放: </span>
            <span class="jukebox-time">{{ played }}/{{ totalDuration }}</span>
          </div>
          <div class="jukebox-info">{{ playingName }} —— {{ playingArtist }}</div>
        </div>
        <div v-if="playList.length > 0">
          <div class="jukebox-info">播放列表：【{{ playList.length }}】</div>
          <div class="jukebox-item">
            <ul>
              <li class="jukebox-song" v-for="(song, index) in playList.slice(0, 3)" :key="index">
                <span>{{ song.name }}</span> ——
                <span>{{ song.artist }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="jukebox-item" v-else>
      <button @click="startJukebox">启用点歌机</button>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, nextTick } from 'vue';
import { propsType } from '@/utils/props';
import { formatTime } from '@/utils/timeFormat';
import axios from 'axios';
import qs from 'qs';

export default {
  props: propsType,
  setup(props) {
    const player = ref(null);
    const idlePlayer = ref(null);
    const playList = ref([]);
    const orderList = ['Killer', '卡农'];
    const data = reactive({
      running: false,
      isIdle: true,
      played: '',
      totalDuration: '',
      playingName: '',
      playingArtist: '',
    });
    // 点歌
    const orderSong = async songName => {
      orderList.push(songName);
    };
    const startJukebox = () => {
      data.running = true;
      nextTick(() => {
        idlePlayer.value.play();
        handleOrderQueue();
      });
    };
    // 更新播放进度
    const updatePlayer = () => {
      data.played = formatTime(player.value.currentTime);
      data.totalDuration = formatTime(player.value.duration);
    };
    // 闲时BGM
    const audioEnded = () => {
      console.log('play ended');
      if (playList.value.length > 0) {
        const song = playList.value.shift();
        player.value.src = song.url;
        data.playingName = song.name;
        data.playingArtist = song.artist;
        idlePlayer.value.pause();
        player.value.play();
        data.isIdle = false;
      } else {
        idlePlayer.value.play();
        data.isIdle = true;
      }
    };
    // 点歌队列处理
    const handleOrderQueue = () => {
      let sleep = 200;
      if (data.running) {
        const { length } = orderList;
        if (length > 0) {
          let songName = orderList.shift();
          axios
            .post('https://music.163.com/api/search/pc', qs.stringify({ s: songName, offset: 0, limit: 20, type: 1 }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            })
            .then(async function (res) {
              if (res.status === 200) {
                for (let song of res.data.result.songs) {
                  let find = false;
                  try {
                    let songUrl = 'https://music.163.com/song/media/outer/url?id=' + song.id + '.mp3';
                    await axios.get(songUrl).then(function (songRes) {
                      if (songRes.headers['content-type'] === 'audio/mpeg') {
                        if (data.isIdle) {
                          data.isIdle = false;
                          idlePlayer.value.pause();
                          data.playingName = song.name;
                          data.playingArtist = song.artists[0].name;
                          player.value.src = songUrl;
                          player.value.play();
                        } else {
                          playList.value.push({
                            name: song.name,
                            url: songUrl,
                            artist: song.artists[0].name,
                          });
                        }
                        find = true;
                      }
                    });
                    if (find) {
                      break;
                    }
                  } catch (error) {
                    console.log('skip song' + song.songid);
                  }
                }
              }
            });
        }
      }
      setTimeout(handleOrderQueue, sleep);
    };
    return {
      ...toRefs(props),
      ...toRefs(data),
      idlePlayer,
      player,
      playList,
      startJukebox,
      updatePlayer,
      audioEnded,
      orderSong,
    };
  },
};
</script>

<style scoped lang="scss">
@keyframes orderIn {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.jukebox {
  &-item {
    padding: 4px;
    flex-direction: row;
    align-items: flex-start;
    transition: opacity 0.5s;
    user-select: none;
    text-shadow: -2px -2px #000000, -2px -1px #000000, -2px 0 #000000, -2px 1px #000000, -2px 2px #000000,
      -1px -2px #000000, -1px -1px #000000, -1px 0 #000000, -1px 1px #000000, -1px 2px #000000, 0 -2px #000000,
      0 -1px #000000, 0 0 #000000, 0 1px #000000, 0 2px #000000, 1px -2px #000000, 1px -1px #000000, 1px 0 #000000,
      1px 1px #000000, 1px 2px #000000, 2px -2px #000000, 2px -1px #000000, 2px 0 #000000, 2px 1px #000000,
      2px 2px #000000;
    opacity: 1;
  }
  &-song {
    color: #fff;
    font-size: 20px;
    font-family: 'Imprima', 'Microsoft YaHei', monospace;
    animation: 0.5s orderIn;
  }
  &-info {
    color: #fff;
    font-size: 25px;
    font-family: 'Imprima', 'Microsoft YaHei', monospace;
  }
}
ul {
  margin: 5px;
}
</style>
