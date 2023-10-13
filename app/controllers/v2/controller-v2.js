
export let renderFoodList=(foodArr) => {
    var content = ``
    for(var i = 0; i < foodArr.length; i++){
        var food = foodArr[i];
        /*
        foodArr.foreach((food) => {
            let {ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh} = food;
            var string = ...
        })
         */
        var string = `<tr>
                    <td>${food.ma}</td>
                    <td>${food.ten}</td>
                    <td>${food.loai}</td>
                    <td>${food.gia}</td>
                    <td>${food.khuyenMai}</td>
                    <td>0</td>
                    <td>${food.tinhTrang}</td>
                    <td><button onclick="deleteFood(${food.ma})" class="btn btn-danger" >Xoá</button>
                    <button onclick="updateFood" class="btn btn-warning">Sửa</button></td>
                    </tr>`
        content += string;
    }
    document.getElementById('tbodyFood').innerHTML = content;
}