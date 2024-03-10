// 引入项目文档
const projectDocumentation = require('./projectDocumentation');

// 读取文档中的特性列表
const features = projectDocumentation.features;

// 利用文档中的特性
function utilizeFeatures() {
  // 在此处编写利用特性的代码
  console.log('利用项目特性:');
  features.forEach(feature => {
    console.log(`- ${feature}`);
  });
}

// 调用函数利用特性
utilizeFeatures();