<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="mascot-container">
        <div class="mascot">
          <svg
            class="svg"
            :class="[mascotStage]"
            :style="{ '--progress': mascotProgress }"
            viewBox="0 0 304 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="304" height="299" fill="" />

            <g class="paw paw-left">
              <path
                d="M68.5608 100.124C77.307 99.1533 84.2274 104.124 86.5608 106.124L75.5608 117.624C75.5608 107.124 55.061 101.623 68.5608 100.124Z"
                fill="white"
              />
              <path
                d="M86.2354 106.504C86.4523 106.251 86.6692 105.998 86.8861 105.745C86.1789 104.988 85.3996 104.274 84.5941 103.614C80.2352 100.036 74.3912 97.7094 68.3514 98.2389C67.0905 98.3597 65.9203 98.4544 64.4562 98.9608C64.3651 98.9945 64.2819 99.027 64.1869 99.0671C64.0772 99.1135 63.9694 99.163 63.863 99.2163C63.6415 99.3304 63.4749 99.4195 63.194 99.6284C62.741 99.9542 62.0561 100.714 61.9766 101.736C61.9923 103.712 62.8126 104.154 63.2254 104.746C67.9922 109.445 74.787 110.915 75.5281 117.624L75.526 117.705L75.5843 117.647C75.9165 117.269 76.2556 116.898 76.6031 116.535C79.2224 113.796 81.8417 111.058 84.4611 108.319C84.9782 107.779 85.4953 107.238 86.0124 106.698C86.1952 106.507 86.4984 106.431 86.9221 106.47C86.6812 106.24 86.4403 106.009 86.1994 105.779C86.2575 106.2 86.1952 106.507 86.0124 106.698C85.4953 107.238 84.9782 107.779 84.4611 108.319C81.8417 111.058 79.2224 113.796 76.6031 116.535C76.2556 116.898 75.8999 117.253 75.5372 117.602L75.5934 117.624C75.8371 111.235 69.9193 105.719 66.2107 102.084C66.0726 101.93 65.9581 101.776 65.9215 101.714C65.866 101.641 65.9687 101.693 65.9482 102.088C65.9144 102.52 65.6127 102.794 65.6092 102.781C65.5788 102.794 65.7206 102.706 65.8655 102.649C66.5645 102.368 67.6733 102.167 68.7701 102.01C73.7012 101.276 78.9411 102.493 83.679 104.988C84.5477 105.445 85.4169 105.955 86.2354 106.504ZM86.8861 105.745L86.2354 106.504L86.1994 105.779L86.9221 106.47L87.6208 106.535L86.8861 105.745Z"
                fill="currentColor"
              />
            </g>

            <g class="ears">
              <g class="ear ear-left">
                <path
                  d="M125.978 74.3693C126.299 74.4564 126.621 74.5436 126.943 74.6307C127.197 73.8534 126.976 73.225 126.788 72.6589C125 68.6407 121.791 65.9271 118.301 63.7163L117.21 63.0564L116.383 64.0279C116.378 64.0332 116.374 64.0385 116.369 64.0439C112.272 68.3423 111.044 74.9409 111.839 80.4273C111.902 80.9606 111.976 81.4884 112.062 82.0261C112.395 82.0087 112.728 81.9913 113.061 81.9739C113.091 81.4408 113.128 80.922 113.171 80.403C113.571 74.8808 115.026 69.8735 118.655 65.9871C118.659 65.9821 118.663 65.9771 118.667 65.9721L116.749 66.2837C119.9 68.2589 123.235 70.4868 125.497 73.3046C125.764 73.6793 125.973 74.0973 125.978 74.3693Z"
                  fill="currentColor"
                />
              </g>

              <g class="ear ear-right">
                <path
                  d="M185.479 76.3693C185.158 76.4564 184.836 76.5436 184.514 76.6307C184.26 75.8534 184.481 75.225 184.669 74.6589C186.457 70.6407 189.666 67.9271 193.156 65.7163L194.247 65.0564L195.074 66.0279C195.079 66.0332 195.083 66.0385 195.088 66.0439C199.185 70.3423 200.413 76.9409 199.618 82.4273C199.555 82.9606 199.481 83.4884 199.395 84.0261C199.062 84.0087 198.729 83.9913 198.396 83.9739C198.366 83.4408 198.329 82.922 198.286 82.403C197.886 76.8808 196.431 71.8735 192.802 67.9871C192.798 67.9821 192.794 67.9771 192.79 67.9721L194.708 68.2837C191.557 70.2589 188.222 72.4868 185.96 75.3046C185.693 75.6793 185.484 76.0973 185.479 76.3693Z"
                  fill="currentColor"
                />
              </g>
            </g>

            <g class="body">
              <g class="body-stroke">
                <path
                  d="M217.424 234.501C217.447 234.834 217.47 235.166 217.493 235.499C220.375 235.466 223.303 235.244 226.179 234.672C233.21 233.323 240.32 229.989 245.298 224.16C250.213 218.512 252.775 211.142 253.561 203.964C253.84 201.448 253.951 199.02 253.94 196.5C252.99 161.659 242.755 125.602 218.222 100.251C215.014 97.0214 211.993 93.4232 208.63 90.1584C194.479 75.5989 173.444 71.0742 153.999 70.3762C142.081 69.9365 129.428 70.3642 118.388 76.1113C107.402 81.8258 99.1853 91.0198 90.9667 99.6397C88.2332 102.561 85.5131 105.485 82.7619 108.407C60.0193 132.247 43.15 167.355 54.1692 201.953C54.3534 202.44 54.5425 202.912 54.7363 203.368L54.7987 203.507C58.3618 211.469 62.2957 221.283 70.3798 227.74C78.383 234.376 89.1171 236.083 98.6283 235.175C109.326 234.158 119.965 233.577 130.863 231.281C143.26 229.113 157.149 229.951 169.691 233.328C175.585 235.113 181.69 235.915 187.77 236.237C193.813 236.552 199.86 236.421 205.878 236.169C209.756 236.004 213.617 235.768 217.493 235.499C217.47 235.166 217.447 234.834 217.424 234.501C213.554 234.77 209.701 235.006 205.835 235.17C199.838 235.422 193.816 235.479 187.846 235.039C181.84 234.594 175.869 233.615 170.226 231.672C157.261 227.729 143.952 226.082 130.054 227.719C119.865 229.299 108.955 229.351 98.2887 229.825C79.6101 231.649 67.1392 218.261 61.1176 200.498L61.18 200.636C61.0243 200.268 60.8696 199.882 60.7168 199.477C50.9064 169.547 63.3373 134.634 85.1544 110.597C87.8258 107.597 90.482 104.619 93.1693 101.677C101.246 92.9774 109.268 83.8904 119.58 78.4089C129.902 72.8765 142.111 72.2745 153.918 72.6258C173.153 73.1726 193.542 77.5019 207.232 91.589C210.516 94.7745 213.451 98.351 216.695 101.749C240.203 127.014 247.439 163.119 247.977 196.5C247.964 198.824 247.849 201.036 247.598 203.297C246.877 209.759 245.284 216.097 241.708 221.381C238.116 226.796 232.285 230.774 225.695 232.731C223.022 233.544 220.237 234.139 217.424 234.501ZM217.493 235.499L217.424 234.501L217.493 235.499V235.499Z"
                  fill="currentColor"
                />
              </g>
              <g class="body-background">
                <path
                  d="M250.958 196.5C250.958 229 229.459 234.167 217.458 235C196.96 236.423 182.358 236.5 169.958 232.5C157.558 228.5 137.792 227.833 130.458 229.5C123.958 230.977 107.959 231.897 98.4585 232.5C68.9587 234.373 62.9582 212.502 57.9582 202.002C51.4582 186.669 48.8186 147.895 83.9582 109.502C110.958 80.0023 118.958 70.2509 153.958 71.501C196.958 73.0368 207.153 90.5 217.458 101C243.958 128 250.958 172.5 250.958 196.5Z"
                  fill="white"
                />
              </g>
            </g>

            <g class="tail">
              <path
                d="M158.458 204.5C157.459 236.5 184.958 236 196.458 235.5C182.458 229 175.053 216.698 177.957 204.5C182.958 183.5 203.957 193 203.957 200.5C203.957 213 211.457 213.75 214.957 213C228.458 210.107 223.458 188 212.958 178.5C198.791 165.682 159.478 171.828 158.458 204.5Z"
                fill="white"
              />
              <path
                d="M196.479 235.999C196.465 235.666 196.45 235.333 196.436 235C191.999 235.155 187.54 235.108 183.176 234.45C173.143 233.266 163.392 227.065 160.924 217.148C159.747 213.118 159.469 208.808 159.689 204.538C159.983 192.337 167.911 181.434 179.007 177.259C189.543 173.043 203.166 173.403 211.161 180.486C217.854 187 222.292 198.792 219.082 206.49C218.134 208.414 216.626 209.646 214.367 210.243C212.112 210.824 209.7 210.318 208.233 208.458C206.694 206.581 206.039 203.535 205.957 200.5C205.957 200.5 205.957 200.5 205.957 200.5C204.05 191.794 196.007 189.702 189.395 190.269C182.133 191.157 177.968 198.167 176.844 204.235C176.422 206.204 176.248 208.223 176.337 210.225C176.619 217.264 180.361 223.622 185.28 228.144C188.354 231 191.899 233.277 195.63 235.105C195.903 235.239 196.106 235.52 196.247 235.953C196.387 235.651 196.528 235.349 196.668 235.046C196.252 235.221 195.903 235.239 195.63 235.105C191.897 233.278 188.456 230.806 185.635 227.787C181.093 222.976 178.243 216.589 178.337 210.187C178.352 208.354 178.602 206.531 179.071 204.765C180.454 199.057 184.24 193.759 189.782 193.362C194.912 192.704 201.767 196.629 201.957 200.5C201.957 200.5 201.957 200.5 201.957 200.5C201.91 203.948 202.102 207.7 204.349 211.235C206.59 214.876 211.467 216.585 215.548 215.758C219.124 215.216 222.876 212.617 224.463 209.144C229.116 196.283 223.096 184.704 214.755 176.514C203.632 167.695 189.081 168.679 177.444 173.577C165.209 178.576 156.917 191.561 157.228 204.461C157.178 208.928 157.627 213.46 159.013 217.739C161.96 228.35 172.744 234.771 182.998 235.722C187.49 236.305 192.025 236.255 196.479 235.999ZM196.436 235L196.479 235.999L196.668 235.046L196.247 235.953L196.436 235Z"
                fill="currentColor"
              />
            </g>

            <g class="face">
              <path
                d="M152.958 84.4995C150.095 86.4078 150.458 89 150.458 90.5C147.958 87 151.758 86.4999 148.958 84.4999C145.458 81.9999 155.958 82.4998 152.958 84.4995Z"
                fill="currentColor"
                stroke="currentColor"
              />
              <g class="eye eye-right">
                <path
                  d="M175.572 85.7195C175.292 82.1956 168.4 80.2592 167.594 83.5153C167.057 85.6878 174.766 88.976 175.572 85.7195Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </g>
              <g class="eye eye-left">
                <path
                  d="M134.958 80.4995C132.458 78 125.958 80.9991 127.458 83.9993C128.459 86.0009 136.458 83.5 134.958 80.4995Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </g>
            </g>

            <g class="paw paw-right">
              <path
                d="M173.863 107.176C185.086 105.799 193.965 112.85 196.959 115.687L182.845 132C182.845 117.106 156.542 109.302 173.863 107.176Z"
                fill="white"
              />
              <path
                d="M196.615 116.05C196.844 115.808 197.074 115.566 197.303 115.324C196.386 114.299 195.375 113.326 194.324 112.427C188.842 107.706 181.373 104.493 173.634 105.31C171.839 105.534 170.228 105.606 168.08 106.642C167.566 106.933 166.914 107.322 166.389 108.223C165.858 109.111 165.908 110.309 166.165 111.011C166.671 112.402 167.357 113.077 167.962 113.779C173.848 119.75 182.162 123.253 182.804 132L182.802 132.11L182.876 132.027C183.354 131.435 183.84 130.85 184.338 130.275C187.658 126.438 190.978 122.6 194.298 118.763C194.953 118.006 195.609 117.248 196.264 116.491C196.496 116.223 196.853 116.064 197.337 116.015C197.085 115.796 196.833 115.578 196.581 115.36C196.601 115.846 196.496 116.223 196.264 116.491C195.609 117.248 194.953 118.006 194.298 118.763C190.978 122.6 187.658 126.438 184.338 130.275C183.84 130.85 183.332 131.415 182.814 131.973L182.886 132C183.211 123.55 176.155 116.341 170.919 111.085C170.441 110.576 169.993 109.939 169.95 109.764C169.937 109.729 169.951 109.754 169.947 109.842C169.945 109.931 169.904 110.072 169.857 110.147C169.746 110.309 169.794 110.193 169.982 110.093C170.867 109.601 172.526 109.277 174.093 109.043C180.593 108.033 187.449 110.066 193.346 113.756C194.467 114.455 195.578 115.227 196.615 116.05ZM197.303 115.324L196.615 116.05L196.581 115.36L197.337 116.015L197.869 115.96L197.303 115.324Z"
                fill="currentColor"
              />
            </g>

            <g
              class="paw paw-left"
              :class="{ 'opacity-0': mascotStage === 'tracking' || mascotStage === 'loading' || mascotStage === 'error' }"
            >
              <path
                d="M68.5608 100.124C77.307 99.1533 84.2274 104.124 86.5608 106.124L75.5608 117.624C75.5608 107.124 55.061 101.623 68.5608 100.124Z"
                fill="white"
              />
              <path
                d="M86.2354 106.504C86.4523 106.251 86.6692 105.998 86.8861 105.745C86.1789 104.988 85.3996 104.274 84.5941 103.614C80.2352 100.036 74.3912 97.7094 68.3514 98.2389C67.0905 98.3597 65.9203 98.4544 64.4562 98.9608C64.3651 98.9945 64.2819 99.027 64.1869 99.0671C64.0772 99.1135 63.9694 99.163 63.863 99.2163C63.6415 99.3304 63.4749 99.4195 63.194 99.6284C62.741 99.9542 62.0561 100.714 61.9766 101.736C61.9923 103.712 62.8126 104.154 63.2254 104.746C67.9922 109.445 74.787 110.915 75.5281 117.624L75.526 117.705L75.5843 117.647C75.9165 117.269 76.2556 116.898 76.6031 116.535C79.2224 113.796 81.8417 111.058 84.4611 108.319C84.9782 107.779 85.4953 107.238 86.0124 106.698C86.1952 106.507 86.4984 106.431 86.9221 106.47C86.6812 106.24 86.4403 106.009 86.1994 105.779C86.2575 106.2 86.1952 106.507 86.0124 106.698C85.4953 107.238 84.9782 107.779 84.4611 108.319C81.8417 111.058 79.2224 113.796 76.6031 116.535C76.2556 116.898 75.8999 117.253 75.5372 117.602L75.5934 117.624C75.8371 111.235 69.9193 105.719 66.2107 102.084C66.0726 101.93 65.9581 101.776 65.9215 101.714C65.866 101.641 65.9687 101.693 65.9482 102.088C65.9144 102.52 65.6127 102.794 65.6092 102.781C65.5788 102.794 65.7206 102.706 65.8655 102.649C66.5645 102.368 67.6733 102.167 68.7701 102.01C73.7012 101.276 78.9411 102.493 83.679 104.988C84.5477 105.445 85.4169 105.955 86.2354 106.504ZM86.8861 105.745L86.2354 106.504L86.1994 105.779L86.9221 106.47L87.6208 106.535L86.8861 105.745Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>
      </div>

      <form class="login-form" @submit.prevent>
        <div class="field">
          <label for="login">Login</label>
          <input
            id="login"
            v-model="name"
            type="text"
            placeholder="Enter login"
            autocomplete="username"
            @focus="isNameFocused = true"
            @blur="isNameFocused = false"
          />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              autocomplete="current-password"
              @focus="isPasswordFocused = true"
              @blur="isPasswordFocused = false"
            />
            <button type="button" class="toggle-eye" @click="showPassword = !showPassword">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
        </div>

        <a href="#" class="forgot-link">Forgot password?</a>

        <button type="submit" class="submit-btn">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const name = ref("");
const password = ref("");
const showPassword = ref(false);
const isNameFocused = ref(false);
const isPasswordFocused = ref(false);

const mascotProgress = computed(() => {
  const activeInput = isNameFocused.value ? name.value : password.value;
  return Math.min(activeInput.length * 3, 100);
});

const mascotStage = computed(() => {
  if (isNameFocused.value) return "tracking";
  if (showPassword.value) return "tracking-hidden";
  if (isPasswordFocused.value) return "covered";
  return "idle";
});
</script>

<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  background: #f0f2f5;
  font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
  padding: 24px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 40px 32px 32px;
}

.mascot-container {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.mascot {
  width: 125px;
  height: 125px;
  transition: color 0.3s;
  color: #4f4f4f;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 13px;
  font-weight: 500;
  color: #555;
}

.field input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
  background: #fafafa;
  color: #333;
  box-sizing: border-box;
}

.field input::placeholder {
  color: #aaa;
}

.field input:focus {
  border-color: #6366f1;
  background: #fff;
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  padding-right: 44px;
}

.toggle-eye {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: color 0.2s;
}

.toggle-eye:hover {
  color: #555;
}

.forgot-link {
  font-size: 13px;
  color: #6366f1;
  text-decoration: none;
  text-align: right;
  margin-top: -8px;
}

.forgot-link:hover {
  text-decoration: underline;
}

.submit-btn {
  margin-top: 8px;
  padding: 12px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #4f46e5;
}

.submit-btn:active {
  background: #4338ca;
}

/* ── Mascot animation styles ── */

.opacity-0 {
  opacity: 0;
}

.ear,
.paw,
.tail,
.face,
.eye {
  will-change: transform;
}

svg > * {
  transform-box: fill-box;
  transform-origin: center;
}

svg > * > * {
  transform-box: fill-box;
  transform-origin: center;
}

.idle .eye,
.tracking-hidden .eye {
  animation: blink 5s infinite;
}

.svg * {
  transition: all 0.25s ease-in-out;
}

.idle > .paw,
.idle > .tail {
  animation: idle-rotate 6s ease-in-out infinite;
}

.idle > .paw.paw-right,
.idle > .tail.paw-right {
  animation: idle-rotate 8s ease-in-out infinite;
}

.idle > .paw.tail,
.idle > .tail.tail {
  animation: idle-rotate 12s ease-in-out infinite;
  transform-origin: 50% 100%;
}

.idle > .paw .ear,
.idle > .tail .ear {
  animation: idle-rotate 6s ease-in-out infinite;
  transform-origin: 50% 100%;
}

@keyframes idle-rotate {
  50% {
    rotate: -16deg;
  }
}

@keyframes blink {
  45%,
  55% {
    scale: 1 1;
  }
  50% {
    scale: 1 0.05;
  }
}

.tracking > .face {
  transform: rotate3d(0, 1, calc((50 - var(--progress)) / 50), 15deg) translateY(25px)
    translateX(calc(-25px + 1px * var(--progress) / 2))
    scale(calc(0.9 + (min(var(--progress), 75 - var(--progress)) / 40) * 0.1));
}

.tracking .ear {
  animation: wiggle 0.25s ease-in-out infinite;
  transform-origin: 50% 100%;
  transform: translateY(2px);
}

.tracking .ear-right {
  scale: 1 1;
  transform: rotate(-15deg) translateY(2px);
}

.tracking .paw-left {
  scale: 1 1;
  transform: translateX(20px) rotate(45deg);
}

.tracking .paw-right {
  scale: 1 1;
  transform: translateX(30px) rotate(45deg);
}

.tracking .tail {
  transform: rotate(12deg) scale(0.85) translateY(-5px);
  transform-origin: 50% 100%;
}

.tracking .body {
  transform: scaleY(0.975) scaleX(1.025);
}

@keyframes wiggle {
  50% {
    rotate: 10deg;
  }
}

.covered > .face {
  transform: translateY(15px) translateX(-15px) scale(1);
}

.covered .ear {
  animation: wiggle 0.25s ease-in-out infinite;
  transform-origin: 50% 100%;
  transform: translateY(6px);
}

.covered .ear-right {
  scale: 1 1;
  transform: rotate(-15deg) translateY(6px);
}

.covered .paw-left {
  scale: 1 1;
  transform: translateX(40px) translateY(-15px) rotate(110deg);
}

.covered .paw-right {
  scale: 1 1;
  transform: translateX(-25px) rotate(5deg) translateY(-15px);
}

.tracking-hidden > .face {
  transform: translateY(15px) translateX(-15px) scale(1);
}

.tracking-hidden .ear {
  animation: wiggle 0.25s ease-in-out infinite;
  transform-origin: 50% 100%;
  transform: translateY(6px);
}

.tracking-hidden .ear-right {
  scale: 1 1;
  transform: rotate(-15deg) translateY(6px);
}

.tracking-hidden .paw-left {
  scale: 1 1;
  transform: translateX(40px) translateY(-15px) rotate(110deg);
}

.tracking-hidden .paw-right {
  scale: 1 1;
  transform: translateX(-5px) rotate(15deg) translateY(-20px);
}

.tracking-hidden .eye-right {
  transform: rotate3d(0, 1, calc((25 - var(--progress)) / 25), 22deg) translateY(5px)
    translateX(calc(-5px + 1px * var(--progress) / 10));
}

.loading > .tail {
  animation: tail-spin 1s ease-in-out infinite;
}

.loading .eye {
  scale: 1 0.25;
}

.loading .paw {
  transform: translateY(15px) translateX(10px) rotate(-120deg);
}

@keyframes tail-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error {
  animation: alert-color 2s ease-in-out infinite;
}

.error .ear {
  scale: 1 1.75;
}

.error .eye-left {
  transform: translateX(5px) rotate(45deg);
}

.error .eye-right {
  transform: translateX(-8px) rotate(-55deg);
}

.error .paw-left {
  scale: 1.25;
  animation: wiggle-allert 0.25s ease-in-out infinite;
  transform-origin: 50% 100%;
}

.error .paw-right {
  scale: 1.25;
  animation: wiggle-allert 0.25s ease-in-out infinite;
  transform-origin: 50% 100%;
}

@keyframes wiggle-allert {
  0%,
  100% {
    rotate: 25deg;
  }
  50% {
    rotate: 50deg;
  }
}

@keyframes alert-color {
  50% {
    color: red;
  }
}
</style>
