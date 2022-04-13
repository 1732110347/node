const mysql =require('mysql')
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'1732110347',
    database:'user'
})

db.query('select * from user',(err,results)=>{
    if (err) return console.log(err.message);
    console.log(results);
})

// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123
const user = { username: 'Spider-Man', password: 'pcc123' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
// 执行 SQL 语句

db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 执行 SQL 语句失败了
  if (err) return console.log(err.message)
  // 成功了
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log('插入数据成功!')
  }
})