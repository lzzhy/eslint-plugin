/** 
 * 在项目生成的时候执行yo eslint:rule的时候终端会进行提问，下面的这些代码就是根据提问生成的
 * 
 * 这个插件是配置函数入参个数的，限制最多三个
 */
module.exports = {
   meta: {
     docs: {
       description: "最多参数",
     },
   },
 
   create(context) {
    /**
     * 获取函数的参数的开始，结束位置
     * @param {node} node AST Node
     */
    function getFunctionParamsLoc(node) {
      const paramsLength = node.params.length;
      return {
        start: node.params[0].loc.start,
        end: node.params[paramsLength - 1].loc.end
      }
    }
     return {
       FunctionDeclaration: (node) => {
         if(node.params.length > 3) {
           context.report({
             loc: getFunctionParamsLoc(node),
             node,
             message: '参数最多不能超过3个'
           })
         }
       }
     };
   },
 };
 