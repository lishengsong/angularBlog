import {Menu} from '../bean/menu';

export const MenuData: Menu[] = [{
  label: '网站设置',
  children: [{
      label: '基本设置',
      children: [{
        label: '网站信息'
      }, {
        label: '修改密码'
      }]
    }, {
      label: '友情连接',
      children: [{
        label: '添加友情'
      }, {
        label: '友情列表'
    }]
  }]
}, {
  label: '用户管理',
  children: [{
    label: '用户设置',
    children: [{
      label: '用户列表'
    }]
  }, {
    label: '标签管理',
    children: [{
      label: '添加标签'
    }, {
      label: '标签列表'
    }]
  }]
}, {
  label: '内容管理',
  children: [{
    label: '文章管理',
    children: [{
      label: '添加文章'
    }, {
      label: '文章列表'
    }]
  }, {
    label: '标签管理',
    children: [{
      label: '添加标签'
    }, {
      label: '标签列表'
    }]
  }, {
    label: '分类管理',
    children: [{
      label: '添加分类'
    }, {
      label: '分类列表'
    }]
  }]
}, {
  label: '碎言评论',
  children: [{
    label: '评论管理',
    children: [{
      label: '评论列表'
    }]
  }, {
    label: '随言碎语',
    children: [{
      label: '添加碎言'
    }, {
      label: '碎言列表'
    }]
  }]
}];
