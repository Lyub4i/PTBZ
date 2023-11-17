<template>
  <div class="content">
    <h2>Завдання для лаборатонрої</h2>
    <img src="../../../img/figure.png" alt="" />
    <div class="inputElements">
      <div class="inputBlock">
        <p>xn:</p>
        <input type="number" v-model="xn" />
        <p>xk:</p>
        <input type="number" v-model="xk" />
        <p>xh:</p>
        <input type="number" v-model="xh" />
      </div>
      <div class="inputBlock" style="margin-left: 15px">
        <p>yn:</p>
        <input type="number" v-model="yn" />
        <p>yk:</p>
        <input type="number" v-model="yk" />
        <p>yh:</p>
        <input type="number" v-model="yh" />
      </div>
      <div class="inputBlock" style="margin-left: 15px">
        <p>Значення R</p>
        <input type="number" v-model="R" />
      </div>
    </div>
    <button @click="calculate">Calculate</button>

    <table
      border="1"
      style="border-collapse: collapse; width: 100%; margin-top: 20px"
    >
      <tr>
        <th style="padding: 10px; text-align: center">X</th>
        <th style="padding: 10px; text-align: center">Y</th>
        <th style="padding: 10px; text-align: center">Результат</th>
      </tr>
      <tr
        v-for="point in result"
        :key="point.x"
        :style="{ background: point.isInRegion ? '#c1f0c1' : '#f0c1c1' }"
      >
        <td style="padding: 10px; text-align: center">{{ point.x }}</td>
        <td style="padding: 10px; text-align: center">{{ point.y }}</td>
        <td style="padding: 10px; text-align: center">
          {{ point.isInRegion ? "В області" : "Не в області" }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      xn: -10,
      xk: 10,
      yn: -10,
      yk: 10,
      xh: 2,
      yh: 2,
      R: 4,
      result: [],
    };
  },
  methods: {
    calculate() {
      this.result = [];
      for (let x = this.xn; x <= this.xk; x += this.xh) {
        for (let y = this.yn; y <= this.yk; y += this.yh) {
          const isInRegion = this.isFine(x, y);
          this.result.push({
            x,
            y,
            isInRegion,
          });
        }
      }
    },

    isFine(x, y) {
      var R = this.R;

      if (x >= 0 && x <= R) {
        if (y == 0) {
          return true;
        }

        if (y < 0 && y >= -R / 2) {
          return true;
        }

        if (y > 0 && y <= R) {
          if ((x - 0) * (x - 0) + (y - 0) * (y - 0) <= R * R) {
            return true;
          }
        }
      }

      if (x >= -R / 2 && x <= 0) {
        if (y <= 0 && y >= -R / 2) {
          if (0 <= x + y >= -R / 2) {
            return true;
          }
        }
      }
      return false;
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
}

.inputElements {
  display: flex;
}

.inputBlock {
  display: flex;
  border: 1px black solid;
}
</style>
