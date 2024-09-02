:root {
  --body-background: white;
  --title: black;
  --primary: blue;
}

.light {
  --body-background: #E0ECFB;
  --title: black;
  --primary: blue;
}

.dark {
  --body-background: rgb(52, 52, 52);
  --title: white;
  --primary: rgb(97, 97, 255);
}
[data-theme='light']{
  --body-background: #E0ECFB;
  --title: black;
  --primary: blue;
}
[data-theme='light']{
  --body-background: #E0ECFB;
  --title: black;
  --primary: blue;
}

body {
  background-color: var(--body-background);
  color: var(--title);
}

.form-box {
  max-width: 300px;
  background: var(--body-background);
  overflow: hidden;
  border-radius: 16px;
  color: var(--title);
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
  background-color: var(--body-background);
  color: var(--title);
}

.title {
  font-weight: bold;
  font-size: 1.6rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
}

.form-container {
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  margin: 1rem 0 .5rem;
  width: 100%;
}

.input {
  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: .9rem;
  padding: 8px 15px;
}

.form-section {
  padding: 16px;
  font-size: .85rem;
  background-color: #e0ecfb;
  box-shadow: rgb(0 0 0 / 8%) 0 -1px;
}

.form-section a {
  font-weight: bold;
  color: #0066ff;
  transition: color .3s ease;
}

.form-section a:hover {
  color: #005ce6;
  text-decoration: underline;
}

.form button {
  background-color: var(--primary);
  color: #fff;
  border: 0;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s ease;
}

.form button:hover {
  background-color: #005ce6;
}

.switch {
  display: block;
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  --size-of-icon: 1.4em;
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--size-of-icon);
  width: var(--size-of-icon);
  border-radius: 20px;
  left: var(--slider-offset);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  transition: .4s;
}

input:checked + .slider {
  background-color: #303136;
}

input:checked + .slider:before {
  left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
  background: #303136;
  box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}

/* Loading box styling */
.loading-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-box img {
  width: 50px;
  height: 50px;
}