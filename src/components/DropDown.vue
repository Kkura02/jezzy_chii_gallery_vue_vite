<template>
    <div class="theme-popup">
        <input type="radio" name="theme" id="default" checked="">
        <input type="radio" name="theme" id="light">
        <input type="radio" name="theme" id="dark">
        <input type="checkbox" id="checkbox">
    <label for="checkbox" class="theme-popup__button">
        <span class="theme-popup__icons">
        <!-- Icon shown here -->
        </span>
        <select name="" id="" class="appearance-none">Chosen Here</select>
    </label>
    <div class="theme-popup__list-container">
        <ul class="theme-popup__list">
        <li>
            <label for="default">
            <span class="theme-popup__icons">
                <!-- Icon 1 Here -->
            </span>
            <span>
                Categ 1
            </span>
            </label>
        </li>
        <li>
            <label for="light">
            <span class="theme-popup__icons">
                <!-- Icon 2 here -->
            </span>
            <span>
                Categ 2
            </span>
            </label>
        </li>
        <li>
            <label for="dark">
            <span class="theme-popup__icons">
                <!-- Icon 3 hEre -->
            </span>
            <span>
                Categ 3
            </span>
            </label>
        </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    setup(){

    }
}
</script>

<style scoped>
/* radio settings 👇 */

.theme-popup {
  /* total */
  --total_text_color: #e0e0e0;
  --total_font_family: Menlo, Roboto Mono, monospace;
  /* button */
  --btn_bg: #3A3A3A;
  --btn_padding: 0.5em;
  --btn_height: 2em;
  --btn_border_radius: 0.3125em;
  --btn_outline_width: 0.0625em;
  --btn_outline_color: #A0A0A0;
  --btn_outline_offset: 0.0625em;
  --btn_gap: 0.3125em;
  /* list */
  --list_padding: 0.5em;
  --list_bg: var(--btn_bg);
  --list_border_radius: var(--btn_border_radius);
  --list_gap: 0.1875em;
  --list_btn_hover_bg: #5A5656;
  --list_btn_active: #b9b9b970;
  --list_btn_border_radius: 0.25em;
  --list_btn_padding: 0.35em 1em;
  --list_btn_gap: 0.4375em;
  --list_btn_outline_width: 0.0625em;
  --list_btn_outline_color: rgb(212, 210, 210);
  --list_offset: 0.35em;
  --list_btn_font_size: 14px;
  --list_position_left: unset;
  --list_position_right: 0;
  /* 👆 if you want to change sides just switch one property */
  /* from properties to "unset" and the other to 0 */
}

.theme-popup__button .theme-popup__icons svg,
#light,
#dark, 
#default, 
#checkbox,
.theme-popup__list-container {
  display: none;
}

.theme-popup {
  color: var(--total_text_color);
  font-family: var(--total_font_family);
  position: relative;
  user-select: none;
}

.theme-popup__list-container {
  position: absolute;
  left: var(--list_position_left);
  right: var(--list_position_right);
  top: calc(var(--btn_height) + var(--list_offset));
  z-index: 3;
}

.theme-popup__icons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}

.theme-popup__button {
  line-height: var(--btn_height);
  background-color: var(--btn_bg);
  padding: 0 var(--btn_padding);
  display: inline-flex;
  align-items: center;
  column-gap: var(--btn_gap);
  border-radius: var(--btn_border_radius);
  border: none;
  color: inherit;
  font-family: inherit;
  outline: none;
  font-weight: bold;
}

.theme-popup__list {
  margin: 0;
  list-style-type: none;
  padding: var(--list_padding);
  border-radius: var(--list_border_radius);
  background-color: var(--list_bg);
  display: flex;
  flex-direction: column;
  row-gap: var(--list_gap);
}

.theme-popup__list label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: var(--list_btn_gap);
  padding: var(--list_btn_padding);
  border-radius: var(--list_btn_border_radius);
  white-space: nowrap;
}

.theme-popup__list label span {
  font-size: var(--list_btn_font_size);
}

/* actions */

#checkbox:checked~.theme-popup__button {
  outline: var(--btn_outline_width) solid var(--btn_outline_color);
  outline-offset: var(--btn_outline_offset);
}

#checkbox:checked~.theme-popup__list-container {
  display: block;
}

.theme-popup__list label:hover,
.theme-popup__button:hover,
#checkbox:checked~.theme-popup__button {
  background-color: var(--list_btn_hover_bg);
}

#default:checked~.theme-popup__list-container label[for="default"],
#light:checked~.theme-popup__list-container label[for="light"],
#dark:checked~.theme-popup__list-container label[for="dark"] {
  background-color: var(--list_btn_active);
  outline: var(--list_btn_outline_width) solid var(--list_btn_outline_color);
}

#default:checked~label svg.default,
#light:checked~label svg.sun,
#dark:checked~label svg.moon {
  display: block;
}
</style>