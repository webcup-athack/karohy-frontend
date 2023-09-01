import { css, keyframes, styled } from 'styled-components';

const rotateLocker = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
        cursor: auto;
        user-select: none;
    }

    50% {
        transform: translate(-50%, -50%) rotate(360deg);
    }

    100% {
        opacity: 0;
        cursor: auto;
        user-select: none;
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SingleServiceWrapper = styled.div`
  padding: 20px 10px 30px 10px;
  min-height: 600px;
  border-radius: 10px;
  background-color: white;
  max-width: 50%;
  display: block;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1.5s ease-in;

  .door {
    background-color: #ed254e;
    position: absolute;
    transition: all 0.6s linear;
  }

  .left-door {
    left: 0;
    top: 0;
    bottom: 0;
    right: 50%;
    border-radius: 10px 0 0 10px;
    border-right: 1px solid white;

    &.open-door {
        right: 100%;
    }
  }

  .right-door {
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    border-radius: 0 10px 10px 0;
    border-left: 1px solid white;

    &.open-door {
        left: 100%;
    }
  }

  .door-lockers {
    ${center}
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    background-color: grey;
    border: 2px solid white;

    &:hover {
      background-color: #696969;
    }

    &.close-door {
      &:after {
        content: 'Open';
        ${center}
        color: #ed254e;
        font-size: 13px;
        font-weight: bolder;
      }
    }

    &.open-door {
      background-color: transparent;
      animation: ${rotateLocker} forwards linear 1.5s;
    }

    .door-locker {
      width: 50%;
      height: 100%;
      position: absolute;
      transition: 0.2s linear;
    }

    .left-door-locker {
      border-radius: 50px 0 0 50px;
      left: 0;

      &.open-locker {
        left: -5px;
        background-color: #ed254e;
      }
    }

    .right-door-locker {
      border-radius: 0 50px 50px 0;
      right: 0;

      &.open-locker {
        right: -5px;
        background-color: #ed254e;
      }
    }
  }
`;

export { SingleServiceWrapper };
