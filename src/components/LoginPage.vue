<template>
  <div class="loginpage">
    <div class="overlay">
      <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group" :class="{ shake: usernameError }">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            />
            <p v-if="usernameError" class="error-message">Username is required</p>
          </div>
          <div class="input-group" :class="{ shake: passwordError }">
            <label for="password">Password</label>
            <div class="password-input">
              <input
                :type="isPasswordVisible ? 'text' : 'password'"
                id="password"
                v-model="password"
                placeholder="Enter your password"
                required
              />
              <span class="eye-icon" @click="togglePasswordVisibility">
                <i v-if="isPasswordVisible" class="fa fa-eye"></i>
                <i v-else class="fa fa-eye-slash"></i>
              </span>
            </div>
            <p v-if="passwordError" class="error-message">Password is required</p>
          </div>
          <button type="submit">Login</button>
          <p class="forgot-password"><router-link to="/reset-password">Forgot Password?</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      isPasswordVisible: false,
      usernameError: false,
      passwordError: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    handleLogin() {
      this.usernameError = !this.username;
      this.passwordError = !this.password;

      if (this.username && this.password) {
        const validUsername = 'cherrieannriveraaa28@gmail.com';
        const validPassword = 'November282002';

        if (this.username === validUsername && this.password === validPassword) {
          this.$emit('authenticated', true);
          this.$router.push('/dashboard');
        } else {
          alert('Invalid username or password.');
        }
      }
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.loginpage {
  background: linear-gradient(45deg, #af1740, #f15b5b, #af1740, #f15b5b);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative; /* Add position relative for overlay */
}

/* Add floating particles or elements effect */
.floating-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
}

.floating-background .particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.floating-background .particle:nth-child(1) {
  width: 30px;
  height: 30px;
  left: 15%;
  animation-delay: 0s;
}

.floating-background .particle:nth-child(2) {
  width: 40px;
  height: 40px;
  left: 70%;
  animation-delay: 1s;
}

.floating-background .particle:nth-child(3) {
  width: 25px;
  height: 25px;
  left: 50%;
  animation-delay: 2s;
}

.floating-background .particle:nth-child(4) {
  width: 35px;
  height: 35px;
  left: 80%;
  animation-delay: 3s;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 25% 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  75% {
    background-position: 75% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

/* Add floating effect */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(15deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  text-align: center;
  animation: scaleUp 0.5s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

h2 {
  margin-bottom: 20px;
  color: #0d2f0e;
  font-size: 1.8rem;
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
  position: relative;
  animation: fadeIn 2s ease-out;
}

.input-group.shake {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #af1740;
  box-shadow: 0 0 10px rgba(175, 23, 64, 0.8);
  transform: scale(1.05);
}

.password-input {
  display: flex;
  align-items: center;
}

.eye-icon {
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
  color: #af1740;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #af1740;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #e74c3c;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(175, 23, 64, 0.8);
}

.error-message {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 4px;
}

.forgot-password {
  margin-top: 10px;
}

.forgot-password a {
  color: #af1740;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-box {
    padding: 20px;
  }
}
</style>
