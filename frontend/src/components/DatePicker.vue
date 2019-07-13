<template>
    <div class="picker">
			<input type="text" :value="dateRangeToDisplay" readonly @click="toggleShowDropdownContent" class="dropbtn">
      <div v-if="showContent" class="dropdown-content">
        <button @click="changeMonth(-1)">⮜</button>
        {{currMonthAndYear}}
        <button @click="changeMonth(1)">⮞</button>
        <ul @mouseup="emitChangedValue">
          <li v-for="day in days" :key="day">
            {{day}}
          </li>
          <li v-for="index in currDayFor1st" :key="index*100">
          </li>
          <li v-for="index in currMonthDaysCount" :key="index" 
          @mouseclick="changePickedStartDay(index)"
          @mousedown="changePickedStartDay(index)"
          @mouseover="changePickedEndDay(index)"
          @mouseup="changePickedEndDay(index)"
          :class="isPicked(index)">
            {{index}}
          </li>
        </ul>
      </div>
      
    </div>
</template>

<script>

    export default {
        props: {
            value: {
                type: Object,
                require: true
            }
        },

        created() {
          this.pickedMonth = this.value.from.getMonth();
          this.pickedYear = this.value.from.getFullYear();
          this.pickedStartDay = this.value.from.getDate();
          this.pickedEndDay = this.value.to.getDate();
        },

        data() {
            return {
                showContent: false,
                pickedMonth: null,
                pickedYear: null,
                pickedStartDay: null,
                pickedEndDay: null,
                monthes: [{name: 'January', daysCount: 31},
                {name: 'February', daysCount: this.getFebDaysByYear(new Date().getFullYear())},
                {name: 'March', daysCount: 31},
                {name: 'April', daysCount: 30},
                {name: 'May', daysCount: 31},
                {name: 'June', daysCount: 30},
                {name: 'July', daysCount: 31},
                {name: 'August', daysCount: 31},
                {name: 'September', daysCount: 30},
                {name: 'October', daysCount: 31},
                {name: 'November', daysCount: 30},
                {name: 'December', daysCount: 31}
                ],
                days: ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            }
        },

        computed: {
          currMonthDaysCount() {
            return this.monthes[this.pickedMonth].daysCount;
          },

          currMonthAndYear() {
            return this.monthes[this.pickedMonth].name + ' ' + this.pickedYear;
          },

          currDayFor1st() {
            return new Date(`${this.pickedMonth+1} 1, ${this.pickedYear}`).getDay();
          },

          dateRangeToDisplay() {
            return this.value.from.toLocaleDateString() + '-' + this.value.to.toLocaleDateString();
          }
        },

        methods: {
            emitChangedValue(newValue) {
                this.showContent = false;
                this.$emit('input', {from: new Date(`${this.pickedMonth+1} ${this.pickedStartDay}, ${this.pickedYear}`), to: new Date(`${this.pickedMonth+1} ${this.pickedEndDay}, ${this.pickedYear}`)});
            },

            toggleShowDropdownContent() {
                this.showContent = !this.showContent;
            },

            getFebDaysByYear(year) {
              return (year%4 && ((!year%100 && !year%400) || (year%100 && year%400)))? 28 : 29;
            },

            changePickedStartDay(index) {
              this.pickedStartDay = index;

              if (this.pickedEndDay < this.pickedStartDay) this.pickedEndDay = null;
            },

            changePickedEndDay(index) {
              if (this.pickedStartDay === null) this.pickedStartDay = 1;
              this.pickedEndDay = index;
            },

            isPicked(index) {
              return (index === this.pickedStartDay)? 'startDay' : (index === this.pickedEndDay)? 'endDay' : (index > this.pickedStartDay && index < this.pickedEndDay)? 'rangeDays': '';
            },

            changeMonth(diff) {
              if (this.pickedMonth === 11 && diff > 0) {
                this.pickedYear+=diff;
                this.pickedMonth = 0;
                this.pickedStartDay = null;
                this.pickedEndDay = null;
              } else if (this.pickedMonth === 0 && diff < 0) {
                this.pickedYear+=diff;
                this.pickedMonth = 11;
                this.pickedStartDay = null;
                this.pickedEndDay = null;
              } else {
                this.pickedMonth+=diff;
                this.pickedStartDay = null;
                this.pickedEndDay = null;
              }
            }
        }
    }

</script>

<style scoped>
  ul {
    list-style: none;
    width: 260px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin: 3px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid black;
  }

  li.startDay, li.endDay {
    background-color: aquamarine;
  }

  li.rangeDays {
    background-color: lightgray;
  }

  .dropdown-content {
    text-align: center;
    user-select: none;
  }

</style>
 