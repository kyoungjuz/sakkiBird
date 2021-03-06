var file = document.querySelector('#getfile');

file.onchange = function () {
    var fileList = file.files ;

    // 읽기
    var reader = new FileReader();
    reader.readAsDataURL(fileList [0]);

    //로드 한 후
    reader.onload = function  () {
        //로컬 이미지를 보여주기
       /* document.querySelector('#preview').src = reader.result;*/

        //썸네일 이미지 생성
        var tempImage = new Image(); //drawImage 메서드에 넣기 위해 이미지 객체화
        tempImage.src = reader.result; //data-uri를 이미지 객체에 주입
        tempImage.onload = function () {
            //리사이즈를 위해 캔버스 객체 생성
            var canvas = document.createElement('canvas');
            var canvasContext = canvas.getContext("2d");

            //캔버스 크기 설정
            canvas.width = 140; //가로 100px
            canvas.height = 140; //세로 100px

            //이미지를 캔버스에 그리기
            canvasContext.drawImage(this, 0, 0, 140, 140);

            //캔버스에 그린 이미지를 다시 data-uri 형태로 변환
            var dataURI = canvas.toDataURL("image/jpeg");

            //썸네일 이미지 보여주기
            document.querySelector('#thumbnail').src = dataURI;

            //썸네일 이미지를 다운로드할 수 있도록 링크 설정
            /*document.querySelector('#download').href = dataURI;*/
        };
    };
};