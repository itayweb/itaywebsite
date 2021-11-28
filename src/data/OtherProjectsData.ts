import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-6", "MyCalc", "img/projects/MyCalcIcon.png", `
    <div class="paragraph">
                <strong>MyCalc</strong> is the first project I did to showcase my capabilities at the language C# and to learn more about developing apps
            </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app from <a href="../MyCalc.rar" target="_blank" download>Here</a> or go through the original code from <a href="https://github.com/itayweb/SimpleCalculatorApp" target="_blank">Github</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/mycalcimg1.png" alt="MyCalc Screenshot"/>
            </div>`, "#91918e"),
    new ProjectData("project-7", "MyDo", "img/projects/mydoicon.png", `
    <div class="paragraph">
                <strong>MyDo</strong> is a basic CRUD (Create, Read, Update and Delete) app that I created to learn about sql and working with it with C# app
            </div>

            <div class="paragraph">
              <div class="notice">
              You can download and try the app from <a href="../MyDoWin64.rar" target="_blank" download>Here</a> or go through the original code from <a href="https://github.com/itayweb/SimpleCRUDApp" target="_blank">Github</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/mydoimg1fixed.png" alt="MyDo Screenshot" />
                <img class="pc-screenshot" src="img/projects/mydoimg2fixed.png" alt="MyDo Screenshot" />
                <img class="pc-screenshot" src="img/projects/mydoimg3fixed.png" alt="MyDo Screenshot" /> 
            </div>`, "#1ca1e2"),
    new ProjectData("project-7", "Huffman Encoding/Decoding", "img/projects/huffmanprojicon.png", `
            <div class="paragraph">
                        <strong>Huffman Encoding/Decoding App</strong> is a console app that I created to learn better about data compression and Huffman encoding/decoding method
                        <br>The app takes the name of the text file and compress the data in it to a byte size and create a unique file, and also able to take the compressed file and decode it back to the original text file
                    </div>
        
                    <div class="paragraph">
                      <div class="notice">
                      You can download and try the app or go through the original code from <a href="https://github.com/itayweb/HuffmanEncoderDecoder" target="_blank">Github</a>
                      </div>
                    </div>
        
                    <div class="paragraph center">
                        <img class="pc-screenshot" src="img/projects/huffmanimg1.png" alt="Huffman Screenshot" />
                        <img class="pc-screenshot" src="img/projects/huffmanimg2.png" alt="Huffman Screenshot" />
                        <img class="pc-screenshot" src="img/projects/huffmanimg3.png" alt="Huffman Screenshot" /> 
            </div>`, "#91918e")        
];