# CURSO: Tecnologia em Análise e Desenvolvimento de Sistemas

## DISCIPLINA: Programação Web

### Profa. Me.: Janaine C. S. Arantes

### Tarefa 06: Aula 06

1. Crie uma aplicação React com um componente de classe chamado "Cabecalho", que contenha:
• Método "constructor", utilizando o objeto state com a seguinte chave e valor:
corFavorita: vermelho
• Método "render" para renderizar a seguinte mensagem na tela do browser:
A minha cor favorita é <'exibir o valor do objeto state>.

2. Crie uma aplicação React com um componente de classe chamado "Cabecalho", que contenha:
• Método "render" para renderizar a seguinte mensagem na tela do browser:
Esse é o conteúdo do componente Cabeçalho.

3. Crie uma aplicação React com um componente de classe chamado "Cabecalho", que contenha:
• Método "constructor", utilizando o objeto state com a seguinte chave e valor:
corFavorita: vermelho
• Método "componentDidMount", com uma arrow function chamada 
"configurarTempoLimite", que altere o valor do objeto state para "amarelo", após 1 
segundo.
• Método "render" para renderizar a seguinte mensagem na tela do browser:
A minha cor favorita é "exibir o valor do objeto state".

4. Crie uma aplicação React com um componente de classe chamado "Cabecalho", que contenha:
• Método "constructor", utilizando o objeto state com a seguinte chave e valor:
corFavorita: vermelho
• Método "componentDidMount", com uma arrow function chamada 
"configurarTempoLimite", que altere o valor do objeto state para "amarelo", após 1 
segundo.
• Método "componentDidUpdate" para mudar o conteúdo HTML do elemento "div" com 
identificador chamado "meuDiv" para: A minha cor favorita é "exibir o valor do objeto 
state".
• Método "render" para renderizar as seguintes mensagens na tela do browser:
A minha cor favorita é "exibir o valor do objeto state". (Obs.: Nesse caso, utilize a tag 
"h1" do HTML.)
A cor favorita atualizada é "exibir o valor do objeto state". (Obs.: Na tag "div" 
identificada como "meuDiv".)

5. Crie uma aplicação React com dois componentes chamados "Recipiente" e "Garrafa". 
O componente "Recipiente" deve conter:
• Método "constructor", utilizando o objeto state com a seguinte chave e valor:
mostrar: true
• Arrow function chamada "removerCabecalho", que altere o objeto state para false.
• Método "render", que verifique o valor do objeto state. Caso seja true, a variável 
"meuCabecalho" deverá receber o componente "Garrafa" (meuCabecalho = <'Garrafa />;). 
Nesse caso, renderize o valor da variável "meuCabecalho" e um botão chamado "Remover
Cabeçalho", que no evento "onClick" chame a função "removerCabecalho".
O componente "Garrafa" deve conter:
• Método "componentWillUnmount", que use uma caixa de alerta ("alert") para exibir a 
seguinte mensagem: O componente chamado Cabecalho está prestes a ser desmontado.
• Método "render" para renderizar a seguinte mensagem na tela do browser:
Olá, React!
Ao clicar no botão "Remover Cabeçalho", a mensagem da caixa de alerta será exibida e, em 
seguida, a mensagem "Olá, React" não será renderizada.