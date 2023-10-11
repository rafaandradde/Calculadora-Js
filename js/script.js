	
function calcular(tipo, valor)
{
    // verificando se o tipo é uma acao
    if(tipo === 'acao')
    {
        // verificando qual é foi a acao selecionada
        if(valor === 'c')
        {
            //limpando o visor
            document.getElementById('visor').value = '';
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.')
        {	
            //concatenando o valor de acao com os valores numerais
            document.getElementById('visor').value += valor;
        }

        if(valor === '=')
        {
            // o eval vai converter no browswer os valores strings direto para uma expressao matematicae trazer o resultado direto para a variavel em questao
            var valor_campo = eval(document.getElementById('visor').value);
            document.getElementById('visor').value = valor_campo
        }

    }

    // verificando se o tipo é um valor
    else if(tipo === 'valor')
    {
        //mostrando os valores no visor
        document.getElementById('visor').value += valor;
    }
}			

