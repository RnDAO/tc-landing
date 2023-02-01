<template>
    <div class="tc-loading_screen">
      <div class="tc-loading_line">
        <div class="relative mx-auto">
          <img
            src="@/static/tc-logo.svg"
            class="min-h-[4rem] object-contain"
            alt="tc-loading"
          />
          <div class="tc-loading-line_box">
          <span class="tc-loading-line_progressbar"></span>
        </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <style scoped>
  .tc-loading_screen {
    background: white;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 50;
  }
  
  .tc-loading_line {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }
  
  .tc-loading-line_box {
    position: relative;
    width: 240px;
  }
  .tc-loading-line_progressbar {
    position: absolute;
    margin: 1rem 0;
    width: 50px;
    height: 5px;
    padding: 0 1px;
    border-radius: 50px;
    background-color: #804ee1;
    animation: loading infinite 3s cubic-bezier(0,0,0,0);
  }
  
  @keyframes loading {
    0%{
      width: 0%;
    }
    100%{
      width: 100%;
    }
  }
  </style>
  