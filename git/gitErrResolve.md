#### 2021/7/15

**错误信息**：`Failed to connect to github.com port 443:connection timed out`

**解决方法：**取消全局代理

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### 2021/7/17

**错误信息**：

```
To https://github.com/maple-zc/-.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/maple-zc/-.git'
```

**原因：**

之所以出现这个报错，是因为我在线上编辑了一部分内容，而本地代码文件中不包含它，所以线上线下就对不上了
