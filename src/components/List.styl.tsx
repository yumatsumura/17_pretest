import styled from "styled-components";

const Lists = styled.div`
  ul {
    position: relative;
    padding: 0;
    list-style: none;
  }
  .profile {
    position: absolute;
    width: 100%;
    height: 50px;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
    transform: translateY(0);
    transition: all 0.3s ease-in-out;
    .profile-box {
      display: flex;
      align-items: center;
      height: 50px;
    }
    .profile-indi {
      height: 2px;
      width: 0%;
      transition: all .2s ease-in-out;
      border-bottom: 2px solid #3399FF;
      position: absolute;
      bottom: 0px;
      left: 0;
    }
    &.rank-1 {
      top: 0px;
    }
    &.rank-2 {
      top: 50px;
    }
    &.rank-3 {
      top: 100px;
    }
    &.rank-4 {
      top: 150px;
    }
    &.rank-5 {
      top: 200px;
    }
    &.rank-6 {
      top: 250px;
    }
    &.rank-7 {
      top: 300px;
    }
    &.rank-8 {
      top: 350px;
    }
    &.rank-9 {
      top: 400px;
    }
    &.rank-10 {
      top: 450px;
    }
  }
  .profile-rank {
    width: 30px;
    text-align: center;
  }
  .profile-img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center center;
  }
  .profile-name {
    width: 50%;
    font-weight:bold;
  }
  .profile-score {
    flex-grow:1;
    text-align: right;
    font-size: 15px;
    font-family: 'Roboto Mono', monospace;
  }
`;

export default Lists;