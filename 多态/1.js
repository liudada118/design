/**
 * 统一操作用于不同对象，会产生不同的反馈
 * 主要思想将不变的事物和可变的事物分离开来，把不变的部分隔离出来，把变化的部分封装起来
 * 但是再静态语言中  makeSound传入的参数是非常固定的
 */

var makeSound = (animal) => { 
    animal.sound()
}

var Dog = function() {}
Dog.prototype.sound = () => {
    console.log('wangwangwang')
}

var Cat = function() {}
Cat.prototype.sound = () => {
    console.log('miaomiaomiao')
}

makeSound(new Dog())
makeSound(new Cat())