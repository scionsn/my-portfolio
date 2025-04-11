var Typer = {
    text: `<span id="a">santa_singh@dev</span>:<span id="b">~</span><span id="c">$</span> git clone my_portfolio<!-- kjsdfhkjdhsfkjdshfkj -->
    <span id="a">santa_singh@dev</span>:<span id="b">~</span><span id="c">$</span> cd my_portfolio<!-- kjsdfhkjdhsfkjdshfkj -->
    <span id="a">santa_singh@dev</span>:<span id="b">~/my_portfolio</span><span id="c">$</span> <span id="cmd">./launch.sh</span> <!-- 🚀 launching your personal brand -->
   	<span id="a">CodeCrafter</span>:<span id="b">~</span><span id="c">$</span></span> Loading Portfolio of Santa Singh ⏳ <!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<span id="k"></span>

	<span>✨ Welcome to my digital terminal! ✨
    I am <span id="a">Santa Singh👨‍💻</span></span>
	<span>  A Developer | Tech Enthusiast</span>
	
    ---
    
	My motto:
    "<span id="k">To grow as a successful expert in Information Technology by leveraging my technical knowledge and skills to drive both personal development and organizational success. 🚀</span>" <!-- sjkfhskjf -->
    
    ---

    🎓 Education:
	<span>- B.Tech in <span id="a">Information Technology, 2021 </span>
    <span id="a">IP University (New Delhi)</span>
	
   💼 Current Role:
<span>
    - Senior Software Engineer @ <span id="a">Caastle</span>
    - Previously @ <span id="a">Cvent</span>
    - Internship: <span id="a">Aerogram</span> (<span id="a">IIT Delhi</span>)
</span>

    ---

    Experience & Expertise:
    - <span id="a">Backend Development  </span>
    - <span id="a">Frontend Development  </span>
    - <span id="a">Databases  </span>
    - <span id="a">Data structures and Algorithms </span>
    - <span id="a">System Design </span>
     - <span id="a">Infrastructure & DevOps </span>

    Technical Proficiency:
    - Backend:  <span id="a"> Node.js, Spring Boot  </span>
    <span>- Frontend: <span id="a"> React.js, React Query, AngularJS </span>
    - Datastores: <span id="a"> MySQL, MongoDB, Redis, Firebase, ElasticSearch </span>
    - Other Tools: <span id="a"> Kafka, Docker, Nginx  </span>
    - Cloud: <span id="a"> AWS, GCP  </span>
	
    🧠 Problem-Solving Profile:
<span>- <a href="https://leetcode.com/u/santasingh/" target="_blank">LeetCode</a> 👨‍💻</span>

    🌟 Looking for Opportunities:
    <span>I’m actively exploring roles and opportunities where I can work on challenging and innovative projects.  
    </span>
    <span> 📩 Reach me: <!-- longlonglongcomment --><a href="mailto:scionsn99@@gmail.com"> scionsn99@gmail.com</a>
    📜 [Download Resume](<a href="https://drive.google.com/file/d/1PeRYHq8Ofb7TqK3goIxYCc1I5dlJC8kz/view?usp=sharing" target="_blank">here</a>)   </span>
    
    🌐 Connect with Me:
    - <a href="https://www.linkedin.com/in/santa-singh-532a25190/" target="_blank">LinkedIn</a>
    
    ---

	Thank you for stopping by! 🫡 
    
	<span id="a">CodeCrafter</span>:<span id="b">~</span><span id="c">$</span> exit<!-- kjsdfhkjdhsfkjdshfkj -->
	`,
    accessCountimer: null,
    index: 0,
    speed: 2,
    accessCount: 0,
    deniedCount: 0,
    content: function() {
        return $("#console").html();
    },

    write: function(str) {
        $("#console").append(str);
        return false;
    },

    addText: function(key) {

        if (key.keyCode == 18) {
            Typer.accessCount++;

            if (Typer.accessCount >= 3) {
                Typer.makeAccess();
            }
        } else if (key.keyCode == 20) {
            Typer.deniedCount++;

            if (Typer.deniedCount >= 3) {
                Typer.makeDenied();
            }
        } else if (key.keyCode == 27) {
            Typer.hidepop();
        } else if (Typer.text) {
            var cont = Typer.content();
            if (cont.substring(cont.length - 1, cont.length) == "|")
                $("#console").html($("#console").html().substring(0, cont.length - 1));
            if (key.keyCode != 8) {
                Typer.index += Typer.speed;
            } else {
                if (Typer.index > 0)
                    Typer.index -= Typer.speed;
            }
            var text = Typer.text.substring(0, Typer.index)
            var rtn = new RegExp("\n", "g");

            $("#console").html(text.replace(rtn, "<br/>"));
            window.scrollBy(0, 50);
        }

        if (key.preventDefault && key.keyCode != 122) {
            key.preventDefault()
        };

        if (key.keyCode != 122) { // otherway prevent keys default behavior
            key.returnValue = false;
        }
    },

    updLstChr: function() {
        var cont = this.content();

        if (cont.substring(cont.length - 1, cont.length) == "|")
            $("#console").html($("#console").html().substring(0, cont.length - 1));

        else
            this.write("|"); // else write it
    }
}

function replaceUrls(text) {
    var http = text.indexOf("http://");
    var space = text.indexOf(".me ", http);

    if (space != -1) {
        var url = text.slice(http, space - 1);
        return text.replace(url, "<a href=\"" + url + "\">" + url + "</a>");
    } else {
        return text;
    }
}

Typer.speed = 3;

var timer = setInterval("t();", 30);

function t() {
    Typer.addText({ "keyCode": 123748 });

    if (Typer.index > Typer.text.length) {
        clearInterval(timer);
    }
}
