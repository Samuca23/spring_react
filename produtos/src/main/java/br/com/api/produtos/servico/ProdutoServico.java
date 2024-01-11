package br.com.api.produtos.servico;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.repositorio.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServico {

    @Autowired
    private ProdutoRepositorio pr;

    //Método para listar todos os produtos
    public Iterable<ProdutoModelo> listar() {
        return pr.findAll();
    }

}
