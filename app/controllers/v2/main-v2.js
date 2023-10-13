
import { https } from "../../services/services.js";
import { renderFoodList } from "./controller-v2.js";
import { layThongTinTuForm } from "../v1/controller-v1.js"
let fetchFoodList = () => {
    https
        .get("/food")
        .then((res) => {
            renderFoodList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}
// lần đầu load trang
fetchFoodList();

function deleteFood(id){
// https đã định nghĩa cho axios api ở file services ~ cú pháp axios -> url, method như trước đó đã học .then .catch
    https.delete(`/food/${id}`).then((res) => {
        // lần 2
        fetchFoodList();

        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    }); // promise
}
window.deleteFood = deleteFood;
// function addFood(){}
// window.addFood = addFood;
window.addFood = () => {
    let food = layThongTinTuForm();
    https.post("/food", food).then((res) => {
        $("#exampleModal").modal("hide");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    }); 
}