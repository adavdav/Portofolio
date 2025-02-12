<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="reset.css">
    <link rel="icon" href="Photo/Portofolio/speaking.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="containBox">

        <!--Navigation-->
        <div class="header">
            <div class="nav">
                <ul>
                <li><a href="#" onclick="profil()">PROFILE</a></li>
                <li><a href="#" onclick="about()">ABOUT</a></li>
                <li><a href="#" onclick="exp()">EXPERIENCE</a></li>
                <li><a href="#" onclick="medal()">MEDALS</a></li>
                <li><a href="#" onclick="skill()">SKILL</a></li>
                <li><a href="#" >PROJECT</a></li>
            </ul>
        </div>
    </div>
<!--Isi Halaman-->

    <iframe id="frame1" src="profile.html" width="100%" height="740px" class="iframe1"></iframe>
    <iframe id="frame2" src="about.html" width="100%" height="740px" class="iframe2"></iframe> 
        <iframe id="frame3" src="experience.html" width="100%" height="740px" class="iframe3"></iframe>
        <iframe id="frame4" src="achieve.html" width="100%" height="740px" class="iframe4"></iframe>
        <iframe id="frame5" src="skill.html" width="100%" height="740px" class="iframe5"></iframe>

<!--Footer
<footer class="footer">
    <p class="p1-footer">&#169; copyright 2025. daffa</p>
    <div class="kontak">
        
        <div class="bag1"><img src="Photo/Portofolio/whatsapp.png"><a href="wa.me/+6285692420921" target="_blank">daffa</a></div>
        <div class="bag2"><img src="Photo/Portofolio/tik-tok.png"><a href="#" target="_blank">@joatx_</a></div>
        <div class="bag3"><img src="Photo/Portofolio/instagram.png"><a href="#" target="_blank">adeave.preset</a></div>
        
    </div>
</footer>
-->
</div>
</div>

<script>
    function profil() {
        const frame1 =
        document.getElementById('frame1');
        frame1.style.opacity='1';
        
        
        const frame2 =
        document.getElementById('frame2');
        frame2.style.opacity='0';
        
        const frame3 =
        document.getElementById('frame3');
        frame3.style.opacity='0';
        
        const frame4 =
        document.getElementById('frame4');
        frame4.style.opacity='0';
        frame4.style.top='-500px';

        
        const frame5 =
        document.getElementById('frame5');
        frame5.style.opacity='0';
    }
    
    function about() {
        const frame1 =
        document.getElementById('frame1');
        frame1.style.opacity='0';
        
        
        const frame2 =
        document.getElementById('frame2');
        frame2.style.opacity='1';
        
        const frame3 =
        document.getElementById('frame3');
        frame3.style.opacity='0';
        
        const frame4 =
        document.getElementById('frame4');
        frame4.style.opacity='0';
        
        const frame5 =
        document.getElementById('frame5');
        frame5.style.opacity='0';
        
        
    }

    function exp() {
        const frame1 =
        document.getElementById('frame1');
        frame1.style.opacity='0';
        
        
        const frame2 =
        document.getElementById('frame2');
        frame2.style.opacity='0';
        
        const frame3 =
        document.getElementById('frame3');
        frame3.style.opacity='1';
        
        const frame4 =
        document.getElementById('frame4');
        frame4.style.opacity='0';
        
        const frame5 =
        document.getElementById('frame5');
        frame5.style.opacity='0';
        
        
    }
    
    function medal() {
        const frame1 =
        document.getElementById('frame1');
        frame1.style.opacity='0';
        
        
        const frame2 =
        document.getElementById('frame2');
        frame2.style.opacity='0';
        
        const frame3 =
        document.getElementById('frame3');
        frame3.style.opacity='0';

        const frame4 =
        document.getElementById('frame4');
        frame4.style.opacity='1';
        frame4.style.top='50px';

        const frame5 =
        document.getElementById('frame5');
        frame5.style.opacity='0';

        
    }
    
    function skill() {
        const frame1 =
        document.getElementById('frame1');
        frame1.style.opacity='0';
        
        
        const frame2 =
        document.getElementById('frame2');
        frame2.style.opacity='0';
        
        const frame3 =
        document.getElementById('frame3');
        frame3.style.opacity='0';

        const frame4 =
        document.getElementById('frame4');
        frame4.style.opacity='0';
        
        const frame5 =
        document.getElementById('frame5');
        frame5.style.opacity='1';
        
        
        
    }
</script>

</body>
</html>