<!--
 * @Author: 卢勇其
 * @Date: 2020-05-23 17:30:51
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 15:57:55
--> 
# 关联模型的查询

    从关联对象中查询， 结果为一个数组,数组中的对象含有category对象
    const category = await Article.find().populate('category')

    [ 
        { 
            tags: [ 5ced005cf0b6b50fe429ffdb, 5ced005df0b6b50fe429ffdc ],
             _id: 5cecff6c9d129a1520c4fa9c,
            title: 'article1',
            content: 'article1',
            __v: 1,
            category: { _id: 5ced0007037e041ec0560c1a, name: 'node', __v: 0 } 
        },
        { 
            tags: [ 5ced005df0b6b50fe429ffdc ],
            _id: 5cecff6d9d129a1520c4fa9d,
            title: 'article2',
            content: 'article2',
            __v: 1,
            category: { _id: 5ced0008037e041ec0560c1b, name: 'vue', __v: 0 } 
        } 
    ]