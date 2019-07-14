<template>
    <div class="picker" v-if="genders.length">
        <button @click.prevent="toggleShowDropdownContent" class="dropbtn">{{display}}▼</button>
        <ul v-if="showContent" class="dropdown-content">
            <li v-for="gender in genders" :key="gender.type"
            @click.prevent="emitChangedValue(gender.type)" 
            class="dropdown-item"> {{gender.display}}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        props: {
            value: {
                type: Object,
                require: true
            },

            type: {
                type: String,
                require: false
            }
        },

        data() {
            return {
                showContent: false,
                genders: {woman: '👩 Woman', man: '👨 Man', other: 'Other'},
            }
        },

        created() {
            if (this.type !== 'picker') {
                this.genders.all= 'All';
            }
        },

        methods: {
            emitChangedValue(newValue) {
                this.showContent = false
                this.$emit('input', newValue);
            },

            toggleShowDropdownContent() {
                this.showContent = !this.showContent;
            }
        },

        computed: {
            display() {
                return this.genders[value];
            }
        }
    }

</script>

<style>
.dropbtn {
  color: #2a6171;
  background-color: #d7f7f5;
  font-size: inherit;
  padding: 2px 10px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f1f1f1
}

.picker {
    display: inline-block;
}

</style>
