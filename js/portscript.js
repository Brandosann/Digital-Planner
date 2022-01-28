$(function() {
    $('.carousel').carousel({
        interval: 60000,
        pause: "false"
      });

      let btnDownload = document.querySelector('#download1');
      let img = document.querySelector('#temp1');
      
      btnDownload.addEventListener('click', () => {
          let imagePath = img.getAttribute('src');
          let fileName = getFileName(imagePath);
          saveAs(imagePath, fileName);
      });
      function getFileName(str) {
          return str.substring(str.lastIndexOf('/') + 1)
      };

      let btnDownload2 = document.querySelector('#download2');
      let img2 = document.querySelector('#temp2');
      
      btnDownload2.addEventListener('click', () => {
          let imagePath2 = img2.getAttribute('src');
          let fileName2 = getFileName(imagePath2);
          saveAs(imagePath2, fileName2);
      });
      function getFileName(str) {
          return str.substring(str.lastIndexOf('/') + 1)
      };

      let btnDownload3 = document.querySelector('#download3');
      let img3 = document.querySelector('#temp3');
      
      btnDownload3.addEventListener('click', () => {
          let imagePath3 = img3.getAttribute('src');
          let fileName3 = getFileName(imagePath3);
          saveAs(imagePath3, fileName3);
      });
      function getFileName(str) {
          return str.substring(str.lastIndexOf('/') + 1)
      };

      let btnDownload4 = document.querySelector('#download4');
      let img4 = document.querySelector('#temp4');
      
      btnDownload4.addEventListener('click', () => {
          let imagePath4 = img4.getAttribute('src');
          let fileName4 = getFileName(imagePath4);
          saveAs(imagePath4, fileName4);
      });
      function getFileName(str) {
          return str.substring(str.lastIndexOf('/') + 1)
      };
})