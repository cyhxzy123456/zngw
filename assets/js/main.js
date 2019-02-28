/**
 * Created by Administrator on 2018/11/15.
 */
// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
