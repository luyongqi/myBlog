//李小白添加

//将获取到的菜单进行处理成routes格式
export function setDataToRoute (list){

    let firstArr = []; //这里是第一个数组元素
    let otherFirstArr = []; //这里是第一个数组外的元素
    list.forEach((item,index)=> {
      item.meta={}
      item.meta.title=item.menuName; //菜单的名称
      item.meta.icon=item.menuIcon; //菜单的icon
      item.name=item.menuSrc; //菜单的跳转路由
      if(!item.toMenuId){
        firstArr.push(item)
      }else{
        otherFirstArr.push(item)
      }
    });
    
    let sencondArr = []; //这里是第二个数组元素
    firstArr.forEach(item=>{
      let sencodArr = [];
      otherFirstArr.forEach(itemNew=>{
        if(item.menuId==itemNew.toMenuId){
          if(!item.children){
            item.children=[]
          }        
          item.children.push(itemNew)
          sencondArr.push(itemNew)
        }
      })
    })
  
  
    //得到第三数组元素
    let thirdArr = [];
    otherFirstArr.forEach(item=>{
      if(sencondArr.indexOf(item)==-1){
        thirdArr.push(item)
      }
    })
  
    //将三级菜单放入一级数组里
    firstArr.forEach(item=>{
      if(!item.children){
        return
      }
      item.children.forEach(itemTwo=>{
        thirdArr.forEach(itemThree=>{
          if(itemTwo.menuId==itemThree.toMenuId){
            if(!itemTwo.children){
              itemTwo.children=[]
            }        
            itemTwo.children.push(itemThree)
          }
        })
      })
    })
  

    sortFn(firstArr)

    console.log(firstArr,'这里是排序后最终的值')

    return firstArr; //此处获取了router格式的菜单 需要排序

}

function sortFn(list){
    list=list.sort((a,b)=>a.menuSort-b.menuSort); //一级
    list.forEach(item=>{
        if(item.children){
            item.children = item.children.sort((a,b)=>a.menuSort-b.menuSort)
            item.children.forEach(itemnew=>{
                if(itemnew.children){
                    itemnew.children = itemnew.children.sort((a,b)=>a.menuSort-b.menuSort)
                }
            })
        }
    })
}


/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 * 非立即执行的意思是触发事件后函数不会立即执行，而是在n秒后执行，如果在n秒内又触发了事件，则会重新计算汉书执行时间
 * 立即执行的意思是触发事件函数会立即执行，然后n秒内不触发时间才能继续执行函数的效果
 */
export function debounce(func,wait,immediate) {
  let timeout;

  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
          var callNow = !timeout;
          timeout = setTimeout(() => {
              timeout = null;
          }, wait)
          if (callNow) func.apply(context, args)
      }
      else {
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
}
/**
* @desc 函数节流
* @param func 函数  节流，就是指连续触发事件但是在n秒中只执行一次函数
* @param wait 延迟执行毫秒数
* @param type 1 表时间戳版，2 表定时器版
*/
export function throttle(func, wait, type) {
  if(type===1){
      var previous = 0;
  }else if(type===2){
      let timeout;
  }
  return function() {
      let context = this;
      let args = arguments;
      if(type===1){
          let now = Date.now();
          if (now - previous > wait) {
              func.apply(context, args);
              previous = now;
          }
      }else if(type===2){
          if (!timeout) {
              timeout = setTimeout(() => {
                  timeout = null;
                  func.apply(context, args)
              }, wait)
          }
      }
  }
}

//将多维数组转为一维数组
export function flat(arr){
  return [].concat(...arr.map(item=>Array.isArray(item)?flat(item):item))
}