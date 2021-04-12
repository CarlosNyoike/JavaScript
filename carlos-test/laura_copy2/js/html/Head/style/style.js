import React

function STYLE(){
  return(
    <style>
      @charset "UTF-8";

      :root {
        --bs-blue: #0d6efd;
        --bs-indigo: #6610f2;
        --bs-purple: #6f42c1;
        --bs-pink: #d63384;
        --bs-red: #dc3545;
        --bs-orange: #fd7e14;
        --bs-yellow: #ffc107;
        --bs-green: #198754;
        --bs-teal: #20c997;
        --bs-cyan: #0dcaf0;
        --bs-white: #fff;
        --bs-gray: #6c757d;
        --bs-gray-dark: #343a40;
        --bs-primary: #0d6efd;
        --bs-secondary: #6c757d;
        --bs-success: #198754;
        --bs-info: #0dcaf0;
        --bs-warning: #ffc107;
        --bs-danger: #dc3545;
        --bs-light: #f8f9fa;
        --bs-dark: #212529;
        --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))
      }

      *,
      ::after,
      ::before {
        box-sizing: border-box
      }

      @media (prefers-reduced-motion:no-preference) {
        :root {
          scroll-behavior: smooth
        }
      }

      body {
        margin: 0;
        font-family: var(--bs-font-sans-serif);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent
      }

      .h1,
      .h2,
      .h3,
      .h5,
      h1,
      h2,
      h3,
      h5 {
        margin-top: 0;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2
      }

      .h1,
      h1 {
        font-size: calc(1.375rem + 1.5vw)
      }

      @media (min-width:1200px) {

        .h1,
        h1 {
          font-size: 2.5rem
        }
      }

      .h2,
      h2 {
        font-size: calc(1.325rem + .9vw)
      }

      @media (min-width:1200px) {

        .h2,
        h2 {
          font-size: 2rem
        }
      }

      .h3,
      h3 {
        font-size: calc(1.3rem + .6vw)
      }

      @media (min-width:1200px) {

        .h3,
        h3 {
          font-size: 1.75rem
        }
      }

      .h5,
      h5 {
        font-size: 1.25rem
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem
      }

      address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit
      }

      ul {
        padding-left: 2rem
      }

      ul {
        margin-top: 0;
        margin-bottom: 1rem
      }

      ul ul {
        margin-bottom: 0
      }

      strong {
        font-weight: bolder
      }

      sup {
        position: relative;
        font-size: .75em;
        line-height: 0;
        vertical-align: baseline
      }

      sup {
        top: -.5em
      }

      a {
        color: #0d6efd;
        text-decoration: underline
      }

      a:hover {
        color: #0a58ca
      }

      a:not([href]):not([class]),
      a:not([href]):not([class]):hover {
        color: inherit;
        text-decoration: none
      }

      code {
        font-family: var(--bs-font-monospace);
        font-size: 1em;
        direction: ltr;
        unicode-bidi: bidi-override
      }

      code {
        font-size: .875em;
        color: #d63384;
        word-wrap: break-word
      }

      a>code {
        color: inherit
      }

      img,
      svg {
        vertical-align: middle
      }

      caption {
        padding-top: .5rem;
        padding-bottom: .5rem;
        color: #6c757d;
        text-align: left
      }

      button {
        border-radius: 0
      }

      button:focus {
        outline: dotted 1px;
        outline: -webkit-focus-ring-color auto 5px
      }

      button,
      input {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit
      }

      button {
        text-transform: none
      }

      [type=button],
      [type=submit],
      button {
        -webkit-appearance: button
      }

      [type=button]:not(:disabled),
      [type=submit]:not(:disabled),
      button:not(:disabled) {
        cursor: pointer
      }

      [type=search] {
        outline-offset: -2px;
        -webkit-appearance: textfield
      }

      [hidden] {
        display: none !important
      }

      .img-fluid {
        max-width: 100%;
        height: auto
      }

      .container {
        width: 100%;
        padding-right: var(--bs-gutter-x, .75rem);
        padding-left: var(--bs-gutter-x, .75rem);
        margin-right: auto;
        margin-left: auto
      }

      @media (min-width:576px) {
        .container {
          max-width: 540px
        }
      }

      @media (min-width:768px) {
        .container {
          max-width: 720px
        }
      }

      @media (min-width:992px) {
        .container {
          max-width: 960px
        }
      }

      @media (min-width:1200px) {
        .container {
          max-width: 1140px
        }
      }

      @media (min-width:1400px) {
        .container {
          max-width: 1320px
        }
      }

      .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(var(--bs-gutter-y) * -1);
        margin-right: calc(var(--bs-gutter-x)/ -2);
        margin-left: calc(var(--bs-gutter-x)/ -2)
      }

      .row>* {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bs-gutter-x)/ 2);
        padding-left: calc(var(--bs-gutter-x)/ 2);
        margin-top: var(--bs-gutter-y)
      }

      .gx-1 {
        --bs-gutter-x: 0.25rem
      }

      @media (min-width:768px) {
        .col-md-6 {
          flex: 0 0 auto;
          width: 50%
        }
      }

      @media (min-width:992px) {
        .col-lg-4 {
          flex: 0 0 auto;
          width: 33.3333333333%
        }

        .col-lg-6 {
          flex: 0 0 auto;
          width: 50%
        }

        .col-lg-8 {
          flex: 0 0 auto;
          width: 66.6666666667%
        }
      }

      @media (min-width:1200px) {
        .col-xl-2 {
          flex: 0 0 auto;
          width: 16.6666666667%
        }

        .col-xl-3 {
          flex: 0 0 auto;
          width: 25%
        }

        .col-xl-4 {
          flex: 0 0 auto;
          width: 33.3333333333%
        }

        .col-xl-8 {
          flex: 0 0 auto;
          width: 66.6666666667%
        }
      }

      @media (min-width:1400px) {
        .col-xxl-2 {
          flex: 0 0 auto;
          width: 16.6666666667%
        }

        .col-xxl-4 {
          flex: 0 0 auto;
          width: 33.3333333333%
        }
      }

      .btn-primary {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd
      }

      .btn-primary:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca
      }

      .btn-primary:focus {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
        box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5)
      }

      .btn-primary:active {
        color: #fff;
        background-color: #0a58ca;
        border-color: #0a53be
      }

      .btn-primary:active:focus {
        box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5)
      }

      .btn-primary:disabled {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd
      }

      .nav {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none
      }

      .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0;
        margin-bottom: 1rem;
        list-style: none
      }

      @keyframes progress-bar-stripes {
        0% {
          background-position-x: 1rem
        }
      }

      @-webkit-keyframes spinner-border {
        to {
          transform: rotate(360deg)
        }
      }

      @keyframes spinner-border {
        to {
          transform: rotate(360deg)
        }
      }

      @keyframes spinner-grow {
        0% {
          transform: scale(0)
        }

        50% {
          opacity: 1;
          transform: none
        }
      }

      .fixed-top {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030
      }

      .d-block {
        display: block !important
      }

      .d-flex {
        display: flex !important
      }

      .d-none {
        display: none !important
      }

      .position-relative {
        position: relative !important
      }

      .justify-content-center {
        justify-content: center !important
      }

      .align-items-center {
        align-items: center !important
      }

      .mt-0 {
        margin-top: 0 !important
      }

      .mt-3 {
        margin-top: 1rem !important
      }

      .mt-4 {
        margin-top: 1.5rem !important
      }

      .mt-5 {
        margin-top: 3rem !important
      }

      .me-auto {
        margin-right: auto !important
      }

      .mb-3 {
        margin-bottom: 1rem !important
      }

      .pt-0 {
        padding-top: 0 !important
      }

      .pt-4 {
        padding-top: 1.5rem !important
      }

      .text-center {
        text-align: center !important
      }

      @media (min-width:768px) {
        .mt-md-0 {
          margin-top: 0 !important
        }
      }

      @media (min-width:992px) {
        .d-lg-none {
          display: none !important
        }

        .mt-lg-0 {
          margin-top: 0 !important
        }
      }

      @media (min-width:1200px) {
        .d-xl-block {
          display: block !important
        }

        .d-xl-flex {
          display: flex !important
        }

        .d-xl-none {
          display: none !important
        }
      }

      @font-face {
        font-family: Poppins;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Roboto;
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Roboto;
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Roboto;
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
      }

      body {
        background: #fff;
        color: #444;
        font-family: Roboto, sans-serif
      }

      a {
        color: #023b6d;
        transition: .5s;
        text-decoration: none
      }

      a:active,
      a:focus,
      a:hover {
        color: #009bd9;
        outline: 0;
        text-decoration: none
      }

      h1,
      h2,
      h3,
      h5 {
        color: #023b6d;
        font-family: Poppins, sans-serif
      }

      #main {
        margin-top: 80px
      }

      .icon {
        width: 16px;
        height: 16px
      }

      .page-header {
        padding: 30px 0 15px 0;
        margin-bottom: 30px;
        background: #fff;
        border-bottom: 2px solid #e0f0fe;
        position: relative
      }

      .page-header:after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 2px;
        background: #009bd9;
        border-right: 3px solid #fff;
        bottom: -2px;
        left: 0
      }

      .page-header .page-title {
        font-size: 24px;
        padding: 0;
        margin: 0;
        color: #023b6d;
        font-weight: 500;
        background: #fff;
        font-family: Poppins, sans-serif
      }

      .search-form input {
        border: 0;
        font-size: 14px;
        color: #023b6d;
        border: 1px solid rgba(2, 59, 109, .2);
        padding: 7px 38px 7px 8px;
        border-radius: 3px;
        transition: .3s;
        width: 100%
      }

      .search-form input:focus,
      .search-form input:hover {
        outline: 0;
        box-shadow: 0 0 10px 0 rgba(2, 59, 109, .15);
        border: 1px solid rgba(2, 59, 109, .3)
      }

      .search-form button {
        border: 0;
        padding: 0;
        margin-left: -30px;
        background: 0 0
      }

      .search-form button .icon {
        color: rgba(2, 59, 109, .6);
        width: 20px;
        height: 20px
      }

      .back-to-top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 15px;
        bottom: 15px;
        visibility: hidden;
        opacity: 0;
        width: 44px;
        height: 44px;
        background: #009bd9;
        border-radius: 4px;
        transition: .3s;
        z-index: 11
      }

      .back-to-top:hover {
        background: #03b7ff;
        box-shadow: 0 6px 15px 0 rgba(0, 155, 217, .3)
      }

      .back-to-top .icon {
        color: #fff;
        width: 20px;
        height: 20px
      }

      .back-to-top.back-to-top-display {
        visibility: visible;
        opacity: 1;
        transition: .3s
      }

      .btn-primary {
        border: 0;
        border-radius: 2px;
        transition: .3s;
        padding: 6px 20px;
        background: #023b6d
      }

      .btn-primary:focus,
      .btn-primary:hover {
        background: #035195;
        box-shadow: 0 6px 15px 0 rgba(2, 59, 109, .25)
      }

      .loading {
        display: none;
        background: #fff;
        text-align: center;
        padding: 15px;
        margin: 0 0 15px 0
      }

      .loading:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border: 3px solid #18d26e;
        border-top-color: #eee;
        -webkit-animation: animate-loading 1s linear infinite;
        animation: animate-loading 1s linear infinite
      }

      @keyframes animate-loading {
        0% {
          transform: rotate(0)
        }

        100% {
          transform: rotate(360deg)
        }
      }

      code {
        background: #e9e9e9;
        color: #444;
        border: 1px solid #ddd;
        border-radius: 2px;
        font-size: 12px;
        padding: 4px 8px 4px 8px
      }

      .cookie-bar {
        background-color: rgba(0, 0, 0, .8);
        color: #fff;
        padding: 15px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        z-index: 99999999;
        transition: bottom 1s;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
      }

      .cookie-bar a {
        color: #fff;
        text-decoration: underline
      }

      .cookie-bar .accept-cookies {
        background-color: #009bd9;
        color: #fff;
        border: 0;
        padding: 3px 15px;
        cursor: pointer;
        border-radius: 3px;
        transition: none;
        margin-left: 10px
      }

      .cookie-bar .accept-cookies:active,
      .cookie-bar .accept-cookies:hover {
        background-color: #0089c0
      }

      #header {
        background: #fff;
        height: 80px;
        z-index: 9999;
        box-shadow: 0 0 15px 0 rgba(2, 59, 109, .1)
      }

      #header .search-form {
        min-width: 240px
      }

      .logo {
        color: #023b6d
      }

      .logo img {
        height: 30px
      }

      .logo p {
        font-size: 24px;
        font-weight: 600;
        font-family: Poppins, sans-serif;
        margin: 0 0 0 6px;
        padding: 0;
        letter-spacing: -.5px;
        text-transform: uppercase
      }

      .logo p span {
        color: #009bd9
      }

      .logo:hover {
        color: #023b6d
      }

      .search-bar-toggle {
        color: #023b6d;
        width: 24px;
        height: 24px;
        margin-right: 5px;
        cursor: pointer;
        transition: .3s
      }

      .search-bar-toggle:hover {
        color: #009bd9
      }

      .search-bar {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        padding: 20px 0;
        box-shadow: 0 0 15px 0 rgba(2, 59, 109, .1);
        display: none;
        background: #fff;
        z-index: 9999
      }

      .nav-menu {
        margin-right: 12px
      }

      .nav-menu li,
      .nav-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center
      }

      .nav-menu>ul>li {
        white-space: nowrap;
        padding: 28px 12px
      }

      .nav-menu a {
        color: #023b6d;
        transition: .3s;
        font-size: 16px;
        font-weight: 500
      }

      .nav-menu a .icon {
        width: 20px;
        height: 20px;
        color: #009bd9
      }

      .nav-menu a:hover,
      .nav-menu li:hover>a {
        color: #009bd9
      }

      .nav-menu .memberarea a {
        padding: 7px 18px;
        display: flex;
        align-items: center;
        font-size: 16px;
        border: 1px solid rgba(2, 59, 109, .1);
        border-top: 0;
        border-bottom: 0;
        border-radius: 3px;
        transition: all .3s
      }

      .nav-menu .memberarea .icon {
        margin: 2px 5px 0 0;
        width: 18px;
        height: 18px;
        color: #009bd9
      }

      .nav-menu .memberarea:hover a {
        color: #fff;
        background: #0471d1;
        box-shadow: 0 6px 15px 0 rgba(2, 59, 109, .25);
        border-color: #0471d1
      }

      .nav-menu .memberarea:hover a .icon {
        color: #fff
      }

      .nav-categories ul {
        position: absolute;
        top: calc(100% - 8px);
        left: 12px;
        right: 12px;
        padding: 15px;
        height: auto;
        background: #fff;
        box-shadow: 0 5px 15px 0 rgba(2, 59, 109, .1);
        opacity: 0;
        visibility: hidden;
        transition: .2s;
        flex-wrap: wrap
      }

      .nav-categories ul li {
        flex: 0 20%;
        align-items: center;
        padding: 8px 8px
      }

      .nav-categories ul a {
        padding: 0;
        color: #023b6d;
        margin-right: 5px;
        font-size: 15px;
        font-weight: 400
      }

      .nav-categories ul a:hover {
        color: #009bd9
      }

      .nav-categories ul .icon {
        color: #009bd9;
        width: 18px;
        height: 18px
      }

      .nav-categories ul span {
        color: #999;
        font-size: 13px;
        font-weight: 400
      }

      .nav-categories:hover>ul {
        opacity: 1;
        visibility: visible;
        transition: .2s
      }

      .mobile-nav-toggle {
        z-index: 9998;
        transition: .4s;
        outline: 0 !important;
        color: #023b6d;
        margin-right: 12px
      }

      .mobile-nav-toggle .icon {
        width: 24px;
        height: 24px
      }

      .mobile-nav-toggle.mobile-nav-hide {
        display: none
      }

      .mobile-nav-toggle.mobile-nav-hide .icon {
        width: 28px;
        height: 28px
      }

      .single-template picture img {
        border: 1px solid #e2ebf5
      }

      .single-buttons {
        padding-bottom: 5px
      }

      .single-buttons a {
        padding: 10px 25px;
        font-size: 16px;
        border-radius: 3px;
        transition: .25s;
        background: #035195;
        color: #fff;
        margin: 0 0 20px 0;
        display: flex;
        align-items: center;
        justify-content: center
      }

      .single-buttons a .icon {
        width: 20px;
        height: 20px;
        margin-right: 4px
      }

      .single-buttons a:hover {
        background: #0364b8;
        box-shadow: 0 6px 15px 0 rgba(2, 59, 109, .25)
      }

      .single-buttons a.template-demo {
        background-color: #009bd9
      }

      .single-buttons a.template-demo:hover {
        background: #00a6e8
      }

      .template-details h2 {
        font-size: 20px;
        position: relative;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 2px solid #e0f0fe
      }

      .template-details h2:after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 2px;
        background: #009bd9;
        border-right: 3px solid #fff;
        bottom: -2px;
        left: 0
      }

      .template-details ul {
        list-style: none;
        padding: 0;
        margin: 0;
        padding: 5px 20px;
        border: 1px solid #e2ebf5;
        background: #fdfdfe
      }

      .template-details li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid #eef3f9
      }

      .template-details li:last-child {
        border-bottom: 0
      }

      .template-details strong {
        color: #023b6d;
        font-size: 14px;
        font-weight: 500
      }

      .template-details span {
        font-size: 14px
      }

      .template-details a {
        color: #0364b8
      }

      .download-template {
        margin-top: 40px
      }

      .download-template .features-list {
        margin-top: 185px
      }

      .download-template .features-list ul {
        background: #f7f9fc;
        list-style: none;
        padding: 0
      }

      .download-template .features-list li {
        height: 44px;
        padding: 0 10px;
        font-size: 15px;
        border-top: 1px solid #eef3f9;
        display: flex;
        align-items: center;
        justify-content: space-between
      }

      .download-template .features-list li:nth-child(odd) {
        background: #fdfefe
      }

      .download-template .features-list .help {
        position: absolute;
        top: 20%;
        transform: translate(-55%, -100%);
        left: 100%;
        width: 200px;
        background: #024681;
        color: #fff;
        border-radius: 4px;
        padding: 10px 15px;
        visibility: hidden;
        opacity: 0;
        transition: .2s;
        font-size: 14px
      }

      .download-template .features-list .icon {
        width: 20px;
        height: 20px;
        color: rgba(2, 59, 109, .45);
        transition: .3s;
        cursor: help
      }

      .download-template .features-list .icon:hover {
        color: #009bd9
      }

      .download-template .features-list .icon:hover+.help {
        top: -10%;
        visibility: visible;
        opacity: 1
      }

      .download-template .licenses .title {
        padding: 15px;
        text-align: center;
        background: #eef3f9;
        border-radius: 4px 4px 0 0;
        border-bottom: 4px solid #fff;
        height: 80px;
        overflow: hidden
      }

      .download-template .licenses .title h2 {
        margin: 0 0 5px 0;
        padding: 0;
        font-size: 20px;
        font-weight: 400;
        color: #111
      }

      .download-template .licenses .title span {
        display: block;
        color: #555;
        font-size: 14px;
        font-style: italic
      }

      .download-template .licenses .price {
        text-align: center;
        padding: 15px;
        background: #f7f9fc;
        height: 105px;
        overflow: hidden
      }

      .download-template .licenses .price h3 {
        font-size: 36px;
        margin: 0;
        padding: 0;
        color: #023b6d;
        font-weight: 500
      }

      .download-template .licenses .price h3 sup {
        margin-right: -8px;
        font-size: 24px
      }

      .download-template .licenses .price span {
        display: block;
        color: #888;
        font-size: 13px;
        font-style: italic;
        line-height: 16px
      }

      .download-template .licenses .features {
        background: #f7f9fc
      }

      .download-template .licenses .features ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center
      }

      .download-template .licenses .features li {
        padding: 10px;
        font-size: 15px;
        border-top: 1px solid #eef3f9;
        font-weight: 600
      }

      .download-template .licenses .features li .feature-title {
        padding: 5px 0;
        font-size: 14px;
        font-weight: 400
      }

      .download-template .licenses .features li .feature-title s {
        color: #999
      }

      .download-template .licenses .features .icon {
        width: 20px;
        height: 20px
      }

      .download-template .licenses .features .icon-check {
        color: #00c560
      }

      .download-template .licenses .features .icon-close {
        color: red
      }

      .download-template .licenses .action {
        padding: 10px;
        border-radius: 0 0 4px 4px;
        border-top: 4px solid #fff;
        text-align: center;
        background: #eef3f9
      }

      .download-template .licenses .action div {
        font-weight: 700;
        font-size: 16px;
        padding-bottom: 8px
      }

      .download-template .licenses .action a {
        display: flex;
        padding: 8px 0;
        font-size: 15px;
        border-radius: 3px;
        transition: .3s;
        color: #fff;
        margin: 10px;
        font-weight: 400;
        justify-content: center;
        align-items: center;
        background: #035195
      }

      .download-template .licenses .action a .icon {
        width: 20px;
        height: 20px;
        margin-right: 6px
      }

      .download-template .licenses .action a:hover {
        color: #fff;
        background: #0364b8;
        box-shadow: 0 6px 15px 0 rgba(2, 59, 109, .25)
      }

      .download-template .licenses .action a.buy {
        background: #00c560
      }

      .download-template .licenses .action a.buy:hover {
        background: #00d96a;
        box-shadow: 0 6px 15px 0 rgba(0, 197, 96, .25)
      }

      @keyframes animate-spinner {
        0% {
          transform: rotate(0)
        }

        100% {
          transform: rotate(360deg)
        }
      }

      .download-subscribe {
        z-index: 99998;
        background-color: rgba(0, 0, 0, .5);
        overflow-x: hidden;
        overflow-y: auto;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: none
      }

      .download-subscribe-form {
        min-width: 380px;
        max-width: 500px;
        background: #fff;
        padding: 20px;
        border: 4px solid #009bd9
      }

      .download-subscribe-form input[type=email] {
        border: 1px solid #ddd;
        padding: 10px 12px;
        width: 100%;
        box-shadow: 0 2px 15px rgba(2, 59, 109, .12);
        display: block
      }

      .download-subscribe-form input[type=email]:focus {
        border: 1px solid #009bd9;
        box-shadow: 0 0 15px rgba(0, 155, 217, .2)
      }

      .download-subscribe-form input[type=submit] {
        font-size: 16px;
        padding: 10px 30px;
        border: 0;
        background: #009bd9;
        color: #fff;
        transition: .3s;
        border-radius: 0 3px 3px 0;
        box-shadow: 0 2px 15px rgba(2, 59, 109, .12);
        display: block;
        width: 100%
      }

      .download-subscribe-form input[type=submit]:hover {
        background: #00a6e8;
        box-shadow: 0 0 30px rgba(2, 59, 109, .2)
      }

      .download-subscribe-form .error-message {
        display: none;
        color: #fff;
        background: #ed3c0d;
        text-align: center;
        padding: 15px;
        font-weight: 600;
        margin: 15px 0 0 0
      }

      .download-subscribe-form .sent-message {
        display: none;
        color: #fff;
        background: #18d26e;
        text-align: center;
        padding: 15px;
        font-weight: 600;
        margin: 15px 0 0 0
      }

      .download-subscribe-form .just-download {
        padding: 10px 25px;
        display: block
      }

      .close-subscribe-form {
        position: absolute;
        width: 26px;
        height: 26px;
        top: -15px;
        right: -15px;
        background: #009bd9;
        color: #fff;
        border-radius: 50%;
        transition: .3s;
        text-align: center
      }

      .close-subscribe-form .icon {
        width: 18px;
        height: 18px
      }

      .close-subscribe-form:hover {
        background: #00adf3;
        color: #fff
      }

      #footer {
        background: #f4faff;
        margin-top: 30px
      }

      .footer-newsletter {
        padding: 50px 0;
        background: #f4faff;
        text-align: center;
        font-size: 16px
      }

      .footer-newsletter h3 {
        font-size: 24px;
        margin: 0 0 20px 0;
        padding: 0;
        line-height: 1;
        font-weight: 600
      }

      .footer-newsletter input[type=email] {
        border: 0;
        padding: 10px 12px;
        width: 100%;
        box-shadow: 0 2px 15px rgba(2, 59, 109, .12);
        display: block
      }

      .footer-newsletter input[type=submit] {
        font-size: 16px;
        padding: 10px 30px;
        border: 0;
        background: #009bd9;
        color: #fff;
        transition: .3s;
        border-radius: 0 3px 3px 0;
        box-shadow: 0 2px 15px rgba(2, 59, 109, .12)
      }

      .footer-newsletter input[type=submit]:hover {
        background: #00a6e8;
        box-shadow: 0 0 30px rgba(2, 59, 109, .2)
      }

      .footer-newsletter .error-message {
        display: none;
        color: #fff;
        background: #ed3c0d;
        text-align: center;
        padding: 15px;
        font-weight: 600;
        margin: 15px 0 0 0
      }

      .footer-newsletter .sent-message {
        display: none;
        color: #fff;
        background: #18d26e;
        text-align: center;
        padding: 15px;
        font-weight: 600;
        margin: 15px 0 0 0
      }

      .footer-top {
        padding: 60px 0 30px 0;
        background: #fff;
        border-top: 2px solid #f4faff
      }

      .footer-top h3 {
        font-size: 16px;
        font-weight: 600;
        position: relative;
        padding-bottom: 12px;
        margin-bottom: 0;
        color: #022d54
      }

      .footer-about {
        margin-bottom: 30px
      }

      .footer-about .description {
        font-size: 14px;
        line-height: 24px;
        margin: 10px 0 0 0
      }

      .social-links a {
        background: #eff7ff;
        color: #023b6d;
        margin-right: 5px;
        border-radius: 50px;
        text-align: center;
        width: 40px;
        height: 40px;
        transition: .3s;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer
      }

      .social-links a:hover {
        background: #023b6d;
        color: #fff;
        text-decoration: none
      }

      .social-links .icon {
        width: 18px;
        height: 18px
      }

      .footer-nav {
        margin-bottom: 30px
      }

      .footer-nav ul {
        list-style: none;
        padding: 0;
        margin: 0
      }

      .footer-nav .icon {
        color: #009bd9;
        width: 18px;
        height: 18px;
        margin: 0 2px 0 -5px
      }

      .footer-nav li {
        padding: 6px 0;
        display: flex;
        align-items: center
      }

      .footer-nav li:first-child {
        padding-top: 0
      }

      .footer-nav a {
        transition: .3s;
        font-size: 15px;
        color: #024986
      }

      .footer-nav a:hover {
        text-decoration: none;
        color: #009bd9
      }

      .copyright {
        font-size: 15px;
        padding: 25px 0
      }

      @media (min-width:1200px) {
        .download-template .licenses .features li {
          height: 44px;
          font-weight: 400
        }

        .download-template .licenses .features li:nth-child(odd) {
          background: #fdfefe
        }
      }

      @media (max-width:1400px) {
        #header .container {
          max-width: 100%;
          padding: 0 20px
        }

        .nav-categories ul {
          left: 0;
          right: 0
        }
      }

      @media (max-width:1024px) {
        .cookie-bar {
          flex-direction: column
        }

        .cookie-bar span {
          padding-bottom: 10px
        }
      }

      @media (max-width:991px) {
        #main {
          margin-top: 60px
        }

        #header {
          height: 60px
        }

        .search-bar {
          top: 60px
        }

        .nav-menu {
          display: none;
          position: fixed;
          top: 60px;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 9999;
          overflow-y: auto;
          background: rgba(255, 255, 255, .96);
          transition: ease-in-out .2s;
          padding: 10px 0
        }

        .nav-menu ul {
          flex-direction: column;
          align-items: flex-start
        }

        .nav-menu>ul>li {
          padding: 12px 24px;
          position: relative
        }

        .nav-menu a {
          font-weight: 500
        }

        .nav-menu .memberarea a {
          background: #0364b8;
          color: #fff;
          font-size: 15px;
          font-weight: 400
        }

        .nav-menu .memberarea a .icon {
          color: #fff
        }

        .nav-menu .nav-categories {
          flex-direction: column;
          align-items: flex-start;
          width: 100%
        }

        .nav-menu .nav-categories ul {
          display: none;
          position: static;
          margin: 20px -20px 0 -20px;
          padding: 10px;
          height: auto;
          background: #fff;
          box-shadow: 0 0 15px 0 rgba(2, 59, 109, .1);
          opacity: 1;
          visibility: visible;
          transition: none;
          flex-wrap: wrap;
          flex-direction: row-reverse
        }

        .nav-menu .nav-categories ul li {
          flex: 0 50%;
          align-items: center;
          padding: 8px 0;
          transition: none
        }

        .nav-menu .nav-categories ul span {
          display: none
        }

        .nav-menu .nav-categories ul a {
          font-size: 15px
        }
      }

      @media (prefers-reduced-motion:no-preference) {
        :root {
          scroll-behavior: auto
        }
      }
    </style>
  )
}
export default STYLE
