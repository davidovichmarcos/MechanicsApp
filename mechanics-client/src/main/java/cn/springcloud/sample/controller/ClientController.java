package cn.springcloud.sample.controller;

import cn.springcloud.sample.model.Client;
import cn.springcloud.sample.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@RequestMapping("/client")
@RestController
public class ClientController {

    @Autowired
    ClientService clientService;

    @PostMapping(value = "", produces = {MediaType.APPLICATION_JSON})
    public Client addClient(@RequestBody Client c ) {
        return clientService.addClient(c);
    }

    @GetMapping(value = "", produces = {MediaType.APPLICATION_JSON})
    public List<Client> getAll() {
        return clientService.getAll();
    }

    @GetMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON})
    public Client getClientById(@RequestParam Integer id) {
        return clientService.getClientById(id);
    }

    @DeleteMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON})
    public void deleteClientById(@RequestParam Integer id) {
        clientService.deleteClientById(id);
    }
    
}


