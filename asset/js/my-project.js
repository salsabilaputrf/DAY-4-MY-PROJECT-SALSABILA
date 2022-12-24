let myProject = []

function getData(event){
    event.preventDefault()

    let projectName = document.getElementById("project_name").value
    let startDate = document.getElementById("start_date").value
    let endDate = document.getElementById("end_date").value
    let desc = document.getElementById("desc").value
    let image = document.getElementById("upload_img").files
    let nodeJsImg = (document.getElementById("nodeJs").checked == true)? './asset/icon/icons-node-js.svg' : ""
    let reactJsImg = (document.getElementById("reactJs").checked == true)? './asset/icon/icons-react.svg' : ""
    let nextJsImg = (document.getElementById("nextJs").checked == true)? './asset/icon/icons-next.js.svg' : ""
    let typeScriptImg = (document.getElementById("typeScript").checked == true)? './asset/icon/icons-typescript.svg' : ""
    

    image = URL.createObjectURL(image[0])

    let addProject = {
        projectName : projectName,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        nodeJsImg: nodeJsImg,
        reactJsImg: reactJsImg,
        nextJsImg: nextJsImg,
        typeScriptImg: typeScriptImg,
        image: image
    }

    myProject.push(addProject)

    console.table(myProject)
    showData()
}

function showData(){
    document.getElementById('project').innerHTML = ""

    for (let i = 0; i < myProject.length; i++){
        document.getElementById('project').innerHTML += `
        <div class="project_item">
            <div class="project_img">
                <img src="${myProject[i].image}" alt="Avatar profil" id="image"/> 
            </div>

            <div class="project_content">
                <p class="title">
                    <a href="detail-project.html" target="_blank">${myProject[i].projectName}</a>
                </p>
                <p class="duration">Durasi: 5 Bulan</p>
                <p class="desc">${myProject[i].desc}</p>
                <div class="technology">
                    <img src="${myProject[i].nodeJsImg}" alt="">
                    <img src="${myProject[i].reactJsImg}" alt="">
                    <img src="${myProject[i].nextJsImg}" alt="">
                    <img src="${myProject[i].typeScriptImg}" alt="">
                </div>
                <div class="btn-group">
                    <button class="btn-edit">edit</button>
                    <button class="btn-delete">delete</button>
                </div>
            </div>                  
        </div>
        `
    }
}


