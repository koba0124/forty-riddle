/* eslint-disable no-console */
<script setup lang="ts">
import { computed, nextTick } from "vue";
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

const e1 = defineModel("e1", { default: 0 });
const steps = defineModel("steps", {
  default: [true, true, false, false, false, false, false],
});
const disabled = computed(() => {
  return e1.value === 1 ? "prev" : e1.value === 6 ? "next" : undefined;
});
const isBlue = defineModel("isBlue", { default: true });
const dialogBlue = defineModel("dialogBlue", { default: false });
const dialogYellow = defineModel("dialogYellow", { default: false });
const dialogGreen = defineModel("dialogGreen", { default: false });
import image1 from "../assets/image1.png";
const imageModel1 = defineModel("imageModel1", { default: image1 });
const answers1_1 = defineModel("answers1_1", { default: "" });
const answers1_2 = defineModel("answers1_2", { default: "" });
const answers1_3 = defineModel("answers1_3", { default: "" });
const answers1_4 = defineModel("answers1_4", { default: "" });
const answers1_5 = defineModel("answers1_5", { default: "" });
const disabled1 = defineModel("disabled1", { default: false });
const answer1 = function () {
  if (disabled1.value) return;
  answers1_1.value = "black-bg";
  answers1_2.value = "black-bg";
  answers1_3.value = "black-bg";
  answers1_4.value = "black-bg";
  answers1_5.value = "";
  disabled1.value = true;
  steps.value[2] = true;
  e1.value = 2;
};

import image2 from "../assets/image2.png";
const imageModel2 = defineModel("imageModel2", { default: image2 });
const answers2_1 = defineModel("answers2_1", { default: "" });
const answers2_2 = defineModel("answers2_2", { default: "" });
const answers2_3 = defineModel("answers2_3", { default: "" });
const answers2_4 = defineModel("answers2_4", { default: "" });
const answers2_5 = defineModel("answers2_5", { default: "" });
const disabled2 = defineModel("disabled2", { default: false });
const answer2 = function () {
  if (disabled2.value) return;
  answers2_1.value = "black-bg";
  answers2_2.value = "black-bg";
  answers2_3.value = "";
  answers2_4.value = "black-bg";
  answers2_5.value = "black-bg";
  disabled2.value = true;
  steps.value[3] = true;
  e1.value = 3;
};

import image3 from "../assets/image3.png";
const imageModel3 = defineModel("imageModel3", { default: image3 });
const answers3_1 = defineModel("answers3_1", { default: "" });
const answers3_2 = defineModel("answers3_2", { default: "" });
const answers3_3 = defineModel("answers3_3", { default: "" });
const answers3_4 = defineModel("answers3_4", { default: "" });
const answers3_5 = defineModel("answers3_5", { default: "" });
const disabled3 = defineModel("disabled3", { default: false });
const answer3 = async function () {
  if (disabled3.value) return;
  answers3_1.value = "black-bg";
  answers3_2.value = "black-bg";
  answers3_3.value = "black-bg";
  answers3_4.value = "";
  answers3_5.value = "black-bg";
  disabled3.value = true;
  steps.value[4] = true;
  e1.value = 4;
  await nextTick();
  tableSizeCalculate();
};

const answers4_1 = defineModel("answers4_1", { default: "" });
const answers4_2 = defineModel("answers4_2", { default: "" });
const answers4_3 = defineModel("answers4_3", { default: "" });
const answers4_4 = defineModel("answers4_4", { default: "" });
const answers4_5 = defineModel("answers4_5", { default: "" });
const disabled4_1 = defineModel("disabled4_1", { default: false });
const disabled4_2 = defineModel("disabled4_2", { default: false });
const answer4_1 = function () {
  if (disabled4_1.value) return;
  if (
    flag1.value &&
    !flag2.value &&
    !flag3.value &&
    !flag4.value &&
    flag5.value &&
    !flag6.value
  ) {
    answers4_1.value = "black-bg";
  } else {
    answers4_1.value = "";
    answers4_2.value = "black-bg";
    answers4_3.value = "black-bg";
    answers4_4.value = "black-bg";
    answers4_5.value = "black-bg";
    steps.value[5] = true;
    e1.value = 5;
    isBlue.value = true;
  }
  disabled4_1.value = true;
};
const answer4_2 = function () {
  if (disabled4_2.value) return;
  if (
    flag1.value &&
    !flag2.value &&
    !flag3.value &&
    !flag4.value &&
    flag5.value &&
    !flag6.value
  ) {
    answers4_1.value = "black-bg";
    answers4_2.value = "";
    answers4_3.value = "black-bg";
    answers4_4.value = "black-bg";
    answers4_5.value = "black-bg";
    steps.value[5] = true;
    e1.value = 5;
    isBlue.value = false;
  } else {
    answers4_2.value = "black-bg";
  }
  disabled4_2.value = true;
};

import image5 from "../assets/image5.png";
const imageModel5 = defineModel("imageModel5", { default: image5 });
const answers5_1 = defineModel("answers5_1", { default: "" });
const answers5_2 = defineModel("answers5_2", { default: "" });
const answers5_3 = defineModel("answers5_3", { default: "" });
const answers5_4 = defineModel("answers5_4", { default: "" });
const answers5_5 = defineModel("answers5_5", { default: "" });
const disabled5_1 = defineModel("disabled5_1", { default: false });
const disabled5_2 = defineModel("disabled5_2", { default: false });
const answer5_1 = function () {
  if (disabled5_1.value) return;
  if (isBlue.value) {
    answers5_1.value = "black-bg";
  } else {
    answers5_1.value = "";
    answers5_2.value = "black-bg";
    answers5_3.value = "black-bg";
    answers5_4.value = "black-bg";
    answers5_5.value = "black-bg";
    steps.value[6] = true;
    e1.value = 6;
  }
  disabled5_1.value = true;
};
const answer5_2 = function () {
  if (disabled5_2.value) return;
  if (isBlue.value) {
    answers5_1.value = "black-bg";
    answers5_2.value = "";
    answers5_3.value = "black-bg";
    answers5_4.value = "black-bg";
    answers5_5.value = "black-bg";
    steps.value[6] = true;
    e1.value = 6;
  } else {
    answers5_2.value = "black-bg";
  }
  disabled5_2.value = true;
};

import image6 from "../assets/image6.png";
const imageModel6 = defineModel("imageModel6", { default: image6 });
const answers6_1 = defineModel("answers6_1", { default: "" });
const answers6_2 = defineModel("answers6_2", { default: "" });
const answers6_3 = defineModel("answers6_3", { default: "" });
const answers6_4 = defineModel("answers6_4", { default: "" });
const answers6_5 = defineModel("answers6_5", { default: "" });
const disabled6_1 = defineModel("disabled6_1", { default: false });
const disabled6_2 = defineModel("disabled6_2", { default: false });
const answer6_1 = function () {
  if (disabled6_1.value) return;
  if (isBlue.value) {
    answers6_1.value = "black-bg";
    answers6_2.value = "";
    answers6_3.value = "black-bg";
    answers6_4.value = "black-bg";
    answers6_5.value = "black-bg";
    mainStore.updateBlue(true);
    dialogBlue.value = true;
  } else {
    answers6_2.value = "black-bg";
  }
  disabled6_1.value = true;
};
const answer6_2 = function () {
  if (disabled6_2.value) return;
  if (isBlue.value) {
    answers6_3.value = "black-bg";
  } else {
    answers6_1.value = "black-bg";
    answers6_2.value = "black-bg";
    answers6_3.value = "";
    answers6_4.value = "black-bg";
    answers6_5.value = "black-bg";
    mainStore.updateYellow(true);
    dialogYellow.value = true;
  }
  disabled6_2.value = true;
};

const flag1 = defineModel("flag1", { default: false });
const click1 = function () {
  flag1.value = true;
};
const color1 = computed(() => {
  return flag1.value ? "black" : "";
});

const flag2 = defineModel("flag2", { default: false });
const click2 = function () {
  flag2.value = true;
};
const color2 = computed(() => {
  return flag2.value ? "black" : "";
});
const flag3 = defineModel("flag3", { default: false });
const click3 = function () {
  flag3.value = true;
};
const color3 = computed(() => {
  return flag3.value ? "black" : "";
});
const flag4 = defineModel("flag4", { default: false });
const click4 = function () {
  flag4.value = true;
};
const color4 = computed(() => {
  return flag4.value ? "black" : "";
});
const flag5 = defineModel("flag5", { default: false });
const click5 = function () {
  flag5.value = true;
};
const color5 = computed(() => {
  return flag5.value ? "black" : "";
});
const flag6 = defineModel("flag6", { default: false });
const click6 = function () {
  flag6.value = true;
};
const color6 = computed(() => {
  return flag6.value ? "black" : "";
});

const tableSize = defineModel("tableSize", { default: "10px" });
const tableSizeCalculate = function () {
  console.log("size");
  console.log(document.getElementById("X0Y0"));
  var w = document.getElementById("X0Y0")
    ? document.getElementById("X0Y0").offsetWidth
    : 10;
  tableSize.value = w + "px";
};
const reload = function () {
  window.location.reload();
};

const openLink = function (url: string) {
  window.open(url, "_blank");
};
</script>

<template>
  <div>
    <v-btn
      :disabled="false"
      variant="text"
      @click="reload"
      class="bg-blue-lighten-4 ma-3"
    >
      1問目から解きなおす(クリア状況は保持) </v-btn
    ><br />

    <v-stepper v-model="e1">
      <template v-slot:default="{ prev, next }">
        <v-stepper-header>
          <v-stepper-item
            :step="`0`"
            :value="0"
            :editable="true"
          ></v-stepper-item>
          <v-divider></v-divider>
          <template v-for="n in 6" :key="`${n}-step`">
            <v-stepper-item
              :step="`${n}`"
              :value="n"
              :editable="steps[n]"
            ></v-stepper-item>

            <v-divider v-if="n !== 6" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window class="d-flex align-center">
          <v-stepper-window-item :key="`0-content`" :value="0">
            <v-card color="grey-lighten-1" class="pa-3 nine-eight">
              <v-card color="white"
                ><h1>しじゅうなぞ</h1>
                <h2>孔子曰く「四十にして惑わず」</h2>
                <v-card
                  >小判(<a href="https://x.com/asami_konno" target="_blank"
                    >@asami_konno</a
                  >)の40歳の誕生日を記念して「惑わない」謎解きをつくりました。<br />
                  ゴールにたどり着けないような<b
                    >誤った選択肢を選ぶと、その道は消えます。</b
                  ><br />
                  なので、すべての選択肢を選んでいけば、必ず最後までたどり着けるようになっています。<br />
                  <br />
                  　
                  <h2>上部の１をクリックすると第１問に挑戦できます。</h2>

                  ※過去の問題をクリックすることで、正解した問題を見直すことができます。
                </v-card>
              </v-card>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item :key="`1-content`" :value="1">
            <v-card color="grey-lighten-1"
              ><v-img :src="imageModel1"></v-img
            ></v-card>
            <v-divider class="ma-3"></v-divider>
            <v-card color="grey-lighten-1"
              ><table class="selection">
                <tbody>
                  <tr>
                    <td :class="answers1_1" @click="answers1_1 = 'black-bg'">
                      ①さんちょう
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers1_2" @click="answers1_2 = 'black-bg'">
                      ②ちょうじょう
                    </td>
                  </tr>
                  <tr>
                    <td class="black-bg"></td>
                    <td :class="answers1_3" @click="answers1_3 = 'black-bg'">
                      ③てっぺん
                    </td>
                    <td class="black-bg"></td>
                  </tr>
                  <tr>
                    <td :class="answers1_4" @click="answers1_4 = 'black-bg'">
                      ④とうちょう
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers1_5" @click="answer1">⑤ちょうてん</td>
                  </tr>
                </tbody>
              </table>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item :key="`2-content`" :value="2">
            <v-card color="grey-lighten-1"
              ><v-img :src="imageModel2"></v-img
            ></v-card>
            <v-divider class="ma-3"></v-divider>
            <v-card color="grey-lighten-1"
              ><table class="selection">
                <tbody>
                  <tr>
                    <td :class="answers2_1" @click="answers2_1 = 'black-bg'">
                      ①さいせいし
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers2_2" @click="answers2_2 = 'black-bg'">
                      ②ていしゃ
                    </td>
                  </tr>
                  <tr>
                    <td class="black-bg"></td>
                    <td :class="answers2_3" @click="answer2">③かいしゃ</td>
                    <td class="black-bg"></td>
                  </tr>
                  <tr>
                    <td :class="answers2_4" @click="answers2_4 = 'black-bg'">
                      ④ちゅうしゃ
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers2_5" @click="answers2_5 = 'black-bg'">
                      ⑤たいしゃ
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item :key="`3-content`" :value="3">
            <v-card color="grey-lighten-1"
              ><v-img :src="imageModel3"></v-img
            ></v-card>
            <v-divider class="ma-3"></v-divider>
            <v-card color="grey-lighten-1"
              ><table class="selection">
                <tbody>
                  <tr>
                    <td :class="answers3_1" @click="answers3_1 = 'black-bg'">
                      ①かいかい
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers3_2" @click="answers3_2 = 'black-bg'">
                      ②うわずみ
                    </td>
                  </tr>
                  <tr>
                    <td class="black-bg"></td>
                    <td :class="answers3_3" @click="answers3_3 = 'black-bg'">
                      ③かすがい
                    </td>
                    <td class="black-bg"></td>
                  </tr>
                  <tr>
                    <td :class="answers3_4" @click="answer3">④うすずみ</td>
                    <td class="black-bg"></td>
                    <td :class="answers3_5" @click="answers3_5 = 'black-bg'">
                      ⑤からかい
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item :key="`4-content`" :value="4">
            <v-card color="grey-lighten-1"
              ><h2>SからGへ向かい文字を拾え</h2>
              <table id="labyrinth">
                <tbody>
                  <tr>
                    <td
                      id="X0Y0"
                      class="flag1 borderTop borderLeft"
                      @click="click1"
                    >
                      ま
                    </td>
                    <td class="borderTop"></td>
                    <td class="borderTop bg-yellow-lighten-1">S</td>
                    <td class="flag3 borderTop borderLeft" @click="click3"></td>
                    <td class="borderTop"></td>
                    <td class="borderTop">よ</td>
                    <td class="borderTop"></td>
                    <td class="flag5 borderTop" @click="click5">く</td>
                    <td class="flag5 borderTop" @click="click5"></td>
                    <td class="flag5 borderTop borderRight" @click="click5">
                      ど
                    </td>
                  </tr>
                  <tr>
                    <td class="flag1 borderLeft" @click="click1"></td>
                    <td class="borderLeft">い</td>
                    <td class="flag3 borderTop borderLeft" @click="click3"></td>
                    <td class="flag3 borderLeft" @click="click3">ど</td>
                    <td class="borderLeft"></td>
                    <td class="flag4 borderTop borderLeft" @click="click4"></td>
                    <td class=""></td>
                    <td class="flag6 borderTop borderLeft" @click="click6"></td>
                    <td class="flag6 borderTop" @click="click6">る</td>
                    <td
                      class="flag5 borderRight borderLeft"
                      @click="click5"
                    ></td>
                  </tr>
                  <tr>
                    <td class="flag1 borderLeft" @click="click1"></td>
                    <td class="borderLeft"></td>
                    <td class="flag3 borderLeft" @click="click3">り</td>
                    <td class="flag3 borderLeft" @click="click3"></td>
                    <td class="borderLeft"></td>
                    <td class="flag4 borderLeft" @click="click4"></td>
                    <td class="borderLeft">う</td>
                    <td class="flag6 borderLeft" @click="click6"></td>
                    <td class="flag6 borderLeft" @click="click6"></td>
                    <td class="flag5 borderRight borderLeft" @click="click5">
                      う
                    </td>
                  </tr>
                  <tr>
                    <td class="flag1 borderLeft" @click="click1">ち</td>
                    <td class="borderLeft"></td>
                    <td class="flag3 borderLeft" @click="click3"></td>
                    <td class="flag3" @click="click3">ま</td>
                    <td class="borderLeft"></td>
                    <td class="flag4 borderLeft" @click="click4">う</td>
                    <td class="borderLeft"></td>
                    <td class="flag6 borderLeft" @click="click6">す</td>
                    <td class="flag6 borderLeft" @click="click6">い</td>
                    <td
                      class="flag5 borderRight borderLeft"
                      @click="click5"
                    ></td>
                  </tr>
                  <tr>
                    <td class="flag1 borderLeft" @click="click1"></td>
                    <td class="borderLeft"></td>
                    <td class="borderTop">き</td>
                    <td class="borderTop"></td>
                    <td class=""></td>
                    <td class="flag4 borderLeft" @click="click4"></td>
                    <td class="borderLeft">と</td>
                    <td class=""></td>
                    <td class="flag6 borderLeft" @click="click6"></td>
                    <td class="flag5 borderRight borderLeft" @click="click5">
                      こ
                    </td>
                  </tr>
                  <tr>
                    <td class="flag1 borderLeft" @click="click1"></td>
                    <td class="flag2 borderLeft" @click="click2">つ</td>
                    <td class="flag2 borderTop" @click="click2"></td>
                    <td class="flag2 borderTop" @click="click2">ぷ</td>
                    <td class="flag2 borderTop" @click="click2"></td>
                    <td class="flag4 borderLeft" @click="click4">よ</td>
                    <td class="flag4 borderTop borderLeft" @click="click4"></td>
                    <td class="borderLeft"></td>
                    <td class="flag6 borderLeft" @click="click6">し</td>
                    <td
                      class="flag5 borderRight borderLeft"
                      @click="click5"
                    ></td>
                  </tr>
                  <tr>
                    <td class="flag1 borderBottom borderLeft" @click="click1">
                      が
                    </td>
                    <td
                      class="flag1 borderTop borderBottom"
                      @click="click1"
                    ></td>
                    <td class="flag1 borderTop borderBottom" @click="click1">
                      い
                    </td>
                    <td
                      class="flag2 borderTop borderBottom borderLeft"
                      @click="click2"
                    ></td>
                    <td class="flag2 borderBottom" @click="click2">す</td>
                    <td
                      class="flag4 borderBottom borderLeft"
                      @click="click4"
                    ></td>
                    <td class="flag4 borderBottom" @click="click4">う</td>
                    <td class="borderBottom borderLeft bg-yellow-lighten-1">
                      G
                    </td>
                    <td
                      class="flag6 borderBottom borderLeft"
                      @click="click6"
                    ></td>
                    <td
                      class="flag5 borderBottom borderRight borderLeft"
                      @click="click5"
                    >
                      う
                    </td>
                  </tr>
                </tbody>
              </table></v-card
            >
            <v-divider class="ma-3"></v-divider>
            <v-card color="grey-lighten-1"
              ><table class="selection">
                <tbody>
                  <tr>
                    <td :class="answers4_1" @click="answer4_1">①いきょうと</td>
                    <td class="black-bg"></td>
                    <td :class="answers4_2" @click="answer4_2">②いきょう</td>
                  </tr>
                  <tr>
                    <td class="black-bg"></td>
                    <td :class="answers4_3" @click="answers4_3 = 'black-bg'">
                      ③きょうと
                    </td>
                    <td class="black-bg"></td>
                  </tr>
                  <tr>
                    <td :class="answers4_4" @click="answers4_4 = 'black-bg'">
                      ④いきようよう
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers4_5" @click="answers4_5 = 'black-bg'">
                      ⑤いきょくどうこう
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item :key="`5-content`" :value="5">
            <v-card color="grey-lighten-1"
              ><v-img :src="imageModel5"></v-img
            ></v-card>
            <v-divider class="ma-3"></v-divider>
            <v-card color="grey-lighten-1"
              ><table class="selection">
                <tbody>
                  <tr>
                    <td :class="answers5_1" @click="answer5_1">①はくとう</td>
                    <td class="black-bg"></td>
                    <td :class="answers5_2" @click="answer5_2">②おうとう</td>
                  </tr>
                  <tr>
                    <td class="black-bg"></td>
                    <td :class="answers5_3" @click="answers5_3 = 'black-bg'">
                      ④くるみ
                    </td>
                    <td class="black-bg"></td>
                  </tr>
                  <tr>
                    <td :class="answers5_4" @click="answers5_4 = 'black-bg'">
                      ④せんとう
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers5_5" @click="answers5_5 = 'black-bg'">
                      ⑤こうぎょく
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item :key="`6-content`" :value="6">
            <v-card color="grey-lighten-1"
              ><v-img :src="imageModel6"></v-img
            ></v-card>
            <v-divider class="ma-3"></v-divider>
            <v-card color="grey-lighten-1"
              ><table class="selection">
                <tbody>
                  <tr>
                    <td :class="answers6_1" @click="answers6_1 = 'black-bg'">
                      玄武
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers6_2" @click="answer6_1">青龍</td>
                  </tr>
                  <tr>
                    <td class="black-bg"></td>
                    <td :class="answers6_3" @click="answer6_2">黄龍</td>
                    <td class="black-bg"></td>
                  </tr>
                  <tr>
                    <td :class="answers6_4" @click="answers6_4 = 'black-bg'">
                      白虎
                    </td>
                    <td class="black-bg"></td>
                    <td :class="answers6_5" @click="answers6_5 = 'black-bg'">
                      朱雀
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-card>
          </v-stepper-window-item>
        </v-stepper-window>

        <v-stepper-actions>
          <template v-slot:prev>
            <div class="text-center pa-4">
              <v-btn
                @click="dialogBlue = true"
                :disabled="!mainStore.isBlue"
                v-if="mainStore.isBlue"
                class="bg-blue-lighten-4"
              >
                【セイ】
              </v-btn>

              <v-dialog v-model="dialogBlue" width="auto">
                <v-card title="【セイ】を達成しました！" class="pa-4">
                  あなたは"正"解のルートをたどり、最後の答え"青"龍に到達しました！
                  おめでとうございます！

                  <v-btn
                    class="bg-blue-accent-2"
                    @click="
                      openLink(
                        'https://twitter.com/intent/tweet?text=%E6%AD%A3%E8%A7%A3%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%88%E3%82%92%E3%81%9F%E3%81%A9%E3%82%8A%E3%80%81%E6%9C%80%E5%BE%8C%E3%81%AE%E5%95%8F%E9%A1%8C%E3%81%AB%E3%80%87%E3%80%87%E3%81%A8%E8%A7%A3%E7%AD%94%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0A%23%E5%9B%9B%E5%8D%81%E8%AC%8E%0A%0A%E3%83%97%E3%83%AC%E3%82%A4%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89%0Ahttps%3A%2F%2Fkoba0124.github.io%2Fforty-riddle%2F%0A'
                      )
                    "
                    >ポストする</v-btn
                  >
                  <template v-slot:actions>
                    <v-btn
                      class="ms-auto"
                      text="Ok"
                      @click="dialogBlue = false"
                    ></v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
            <div class="text-center pa-4">
              <v-btn
                @click="dialogGreen = true"
                :disabled="!mainStore.isYellow || !mainStore.isBlue"
                v-if="mainStore.isYellow && mainStore.isBlue"
                class="bg-green-accent-1"
              >
                【セイコウ】
              </v-btn>

              <v-dialog v-model="dialogGreen" width="auto">
                <v-card title="【セイコウ】を達成しました！" class="pa-4">
                  あなたは【しじゅうなぞ】の"構成"を理解し"成功"に到達しました！
                  おめでとうございます！

                  <v-btn
                    class="bg-green-accent-2"
                    @click="
                      openLink(
                        'https://twitter.com/intent/tweet?text=%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E8%AC%8E%E3%82%92%E8%A7%A3%E3%81%8D%E3%80%81%E6%88%90%E5%8A%9F%E3%82%92%E3%81%A4%E3%81%8B%E3%81%BF%E5%8F%96%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%EF%BC%81%0A%23%E5%9B%9B%E5%8D%81%E8%AC%8E%0A%0A%E3%83%97%E3%83%AC%E3%82%A4%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89%0Ahttps%3A%2F%2Fkoba0124.github.io%2Fforty-riddle%2F'
                      )
                    "
                    >ポストする（未実装）</v-btn
                  >
                  <template v-slot:actions>
                    <v-btn
                      class="ms-auto"
                      text="Ok"
                      @click="dialogGreen = false"
                    ></v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </template>
          <template v-slot:next>
            <div class="text-center pa-4">
              <v-btn
                @click="dialogYellow = true"
                :disabled="!mainStore.isYellow"
                v-if="mainStore.isYellow"
                class="bg-yellow-accent-1"
              >
                【コウ】
              </v-btn>

              <v-dialog v-model="dialogYellow" width="auto">
                <v-card title="【コウ】を達成しました！" class="pa-4">
                  あなたはルートを変"更"して、最後の答え"黄"龍に到達しました！
                  おめでとうございます！

                  <v-btn
                    class="bg-yellow-accent-2"
                    @click="
                      openLink(
                        'https://twitter.com/intent/tweet?text=%E6%9B%B4%E3%81%AA%E3%82%8B%E3%83%AB%E3%83%BC%E3%83%88%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%80%81%E6%9C%80%E5%BE%8C%E3%81%AE%E5%95%8F%E9%A1%8C%E3%81%AB%E3%80%87%E3%80%87%E3%81%A8%E8%A7%A3%E7%AD%94%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0A%23%E5%9B%9B%E5%8D%81%E8%AC%8E%0A%0A%E3%83%97%E3%83%AC%E3%82%A4%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89%0Ahttps%3A%2F%2Fkoba0124.github.io%2Fforty-riddle%2F'
                      )
                    "
                    >ポストする（未実装）</v-btn
                  >
                  <template v-slot:actions>
                    <v-btn
                      class="ms-auto"
                      text="Ok"
                      @click="dialogYellow = false"
                    ></v-btn>
                  </template>
                </v-card>
              </v-dialog></div></template
        ></v-stepper-actions>
      </template>
    </v-stepper>
  </div>
</template>

<style scoped>
#labyrinth {
  border-collapse: collapse;
  margin: 5px;
  background: white;
  table-layout: fixed;
  width: 98%;
  max-width: 700px;
}

#labyrinth td {
  padding: 2px;
  height: v-bind(tableSize);
  margin: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: 900;
  font-size: large;
}

#labyrinth td.flag1 {
  background: v-bind(color1);
}
#labyrinth td.flag2 {
  background: v-bind(color2);
}
#labyrinth td.flag3 {
  background: v-bind(color3);
}
#labyrinth td.flag4 {
  background: v-bind(color4);
}
#labyrinth td.flag5 {
  background: v-bind(color5);
}
#labyrinth td.flag6 {
  background: v-bind(color6);
}

#labyrinth td.borderTop {
  border-top: solid 5px;
}
#labyrinth td.borderLeft {
  border-left: solid 5px;
}
#labyrinth td.borderRight {
  border-right: solid 5px;
}
#labyrinth td.borderBottom {
  border-bottom: solid 5px;
}

.nine-eight {
  min-width: 98%;
}

.selection {
  border-collapse: collapse;

  margin: 5px;
  background: white;
  table-layout: fixed;
  width: 98%;
  max-width: 700px;
}
.selection td {
  border: solid 3px;
  height: 30px;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: 600;
}

.black-bg {
  background: black;
}
</style>
