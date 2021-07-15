#### 2021/7/15

**错误信息**：`Failed to connect to github.com port 443:connection timed out`

```
解决方法：
取消全局代理：

git config --global --unset http.proxy
git config --global --unset https.proxy
```

