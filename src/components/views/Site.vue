<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
            
                <ul class="navbar-nav links">
                    <li class="nav-item"> 
                        <RouterLink class="nav-link" to="#section_1">Seção 1</RouterLink>
                    </li>
                    <li class="nav-item"> 
                        <RouterLink class="nav-link" to="#section_2">Seção 2</RouterLink>
                    </li>
                    <li class="nav-item"> 
                        <RouterLink class="nav-link" to="#section_3">Seção 3</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/login">Acessar</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="destaque">
                        <h4 class="text-primary text-center">Descubra as vantagens em utilizar o Empresa 360 para gerenciar seus negócios!</h4>
                    </div>
                </div>
                <div class="col">
                    <p class="text-center">Inscreva-se e veja a nossa demonstração</p>
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Nome">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="E-mail">
                            </div>
                            <button class="btn btn-primary">Me inscrever</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 p-5 bg-light">
                <div class="col">
                    <h2 id="section_1">Seção 1</h2>
                    <h3>Sintaxe de rota expressiva</h3>
                    <p>Defina rotas estáticas e dinâmicas com uma sintaxe intuitiva e poderosa.</p>
                    <br />

                    <h3>Controle de navegação refinado</h3>
                    <p>Intercepte qualquer navegação e controle com precisão seu resultado.</p>
                </div>
            </div>

            <div class="row mt-5 p-5">
                <div class="col">
                    <h2 id="section_2">Seção 2</h2>
                    <h3>Configuração baseada em componentes</h3>
                    <p>Mapeie cada rota para o componente que deve ser exibido.</p>
                    <br />

                    <h3>Modos de história</h3>
                    <p>Escolha entre os modos de histórico HTML5, Hash ou Memory.</p>
                </div>
            </div>

            <div class="row mt-5 p-5 bg-light">
                <div class="col">
                    <h2 id="section_3">Seção 3</h2>
                    <h3>Controle de rolagem</h3>
                    <p>Controle com precisão a posição de rolagem em cada página.</p>
                    <br />

                    <h3>Codificação Automática</h3>
                    <p>Use diretamente caracteres unicode (你好) em seu código.</p>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="row bg-secondary">
                <div class="col">
                    <p>Rodapé</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-superior {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.destaque {
    padding: 60px 15px;
}
.links {
    flex-direction: row;
}
.links a{
    margin-right: 20px;
}
</style>