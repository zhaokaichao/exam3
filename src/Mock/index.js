import Mock from 'mockjs'
Mock.mock('/api/list', {
    code: 200,
    "data|20-30": [{
        bigImg: '@image(100x200,@color)',
        img: '@image(50x50,@color)',
        id: '@id'
    }]
})