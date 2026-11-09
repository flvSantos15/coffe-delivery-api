Criar docs/adr/0001-modular-monolith.md com contexto, decisão, alternativas, consequências e critérios para extração futura

ADR (Architecture Decision Record)

ADR-001 = Adotar monolito modular como arquitetura inicial.

1. Contexto: Qual problema estamos tentando resolver?
Muito complexidade prematura.


2. Decisao: Por que iniciar com monolito modular?
Quando a equipe for pequena e quando a area e desconhecida.


3. Alteranativas: Por que nao comecar diretamente com microservicoes?
Porque eu precisaria lidar com problemas adicionais (comunicacao entre servicos, autenticacao distribuida, observabilidade, deploy independente e consistencia dos dados).


4. Conseguencias: Quais beneficios e limitacoes essa decisao traz?
Posso me concentrar apenas em um unico projeto e me economiza tempo e esforco para nao precisar dividir meu foco em mais de uma code base.


5. Evolucao: Em quais situacoes seria justificavel extrair um modulo para um microservicos?
Quando os modulos precisarem de isolamento e escalabilidade especificas.
Quando algum modulo tiver carga ou requisito de disponibilidade muito diferente do restante.
Quando cada modulo estiver maduro e independente e necessitar de atencao maior.
