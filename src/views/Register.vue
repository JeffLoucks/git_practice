<template>
  <div>
    <amplify-authenticator
      v-if="authState !== 'signedin'"
    ></amplify-authenticator>
    <div v-if="authState === 'signedin' && user">
      <amplify-sign-out></amplify-sign-out>
      <div>Hello, {{ user.email }}</div>
    </div>
  </div>
</template>
