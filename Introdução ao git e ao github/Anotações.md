# Anotações curso de introdução ao git / github

Link para download do Git: https://git-scm.com/
O git bash é um terminal extendido para otimizar o uso do Git.

## Comandos básicos

- dir ou ls : mostra lista de diretórios dentro da pasta
  
  - ls -a : tag -a mostra arquivos ocultos

- mkdir : cria novo diretório

- cd : possibilita navegar entre as pastas
  
  - cd  / : leva até a base do diretório
  
  - cd Windows : leva até a pasta windows
  
  - cd .. : volta para pasta anterior

- clear ou ctrl + L : limpa a tela

- tab : autocompleta nomes de pastas ou arquivos

- echo hello > hello.txt : cria arquivo hello.txt cujo conteúdo é hello
  
  - echo : cria uma saída no prompt
  
  - '>' : joga  a saída para um arquivo

- não existem mensagens de sucesso. não acontecer nada é bom.

- del : deleta arquivos dentro da pasta, mas não a pasta

- rmdir : deleta pasta e arquivos

- pwd : mostra caminho completo até a pasta onde está

- sha1:  tipo de encriptação que gera chave de 40 caracteres, bom para identificar se há mudanças entre versões

- git init: inicializa o git e cria pasta de arquivos oculta .git

- git add : Inicia o versionamento
  
  - git add *: adiciona todas as modificações. tambem funciona com  . ou - A

- git commit: cria um commit
  
  - git commit -m "*mensagem descrevendo modificação*": importante adicionar comentário para identificar quais foram as modificações

- git status : monitora qual o estado dos arquivos. Vê diferenças em relação aos commits anteriores

- 

### Configuração inicial

- git config -- global user.email "*endereço de email*"

- git config -- global user.name "*username no github*"

- git config -- list : mostra todas as configurações do git

- git config -- global -- unset user.email : retira a configuração do email registrado

### Criar um novo repositório no github

1. copiar url

2. git remote add origin *colar url*

3. git remote -v : lista de repositórios cadastrados

4. git push origin master : login / token
   
   No github arquivo readme é colocado em destaque e serve como descrição do repositório

### Resolvendo conflitos

arquivo no git com alterações na mesma linha

- git push origin master gera mensagem de erro

- git pull origin master

- resolver conflito no arquivo, o git destaca em comentários onde está o conflito

- git add *   

- git commit - m "*descrição de mudanças e resolução de conflito*"

- git push origin master

### Como baixar repositório

- no github botão code -> clone with https -> copiar url

- git clone *colar url* : baixa repositório para a máquina incluindo pasta . git com os versionamentos e apontando para o repositório original

### Chave SSH

2 chaves uma local e uma no servidor. com elas o github reconhece a máquina

Github >> icone >> settings >> SSH and GPG keys >> New SSH key

- Gerar a chave SSH
  
  - git bash : ssh-keygen -t ed25519 -C *endereço de email*
  
  - local >> enter
  
  - senha *inserir senha*
  
  - cd  /c/users/*usuário*/.ssh/
  
  - ls
  
  - cat id_ed25519.pub : lê o conteúdo da chave pública, copiar e colar na nova chave do github
  
  - adicionar chave no github
  
  - pwd : mostra o caminho completo
  
  - eval $(ssh-agent -s) 
  
  - ssh-add id_ed25519
  
  - *senha*
  
  - 


