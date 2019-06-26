package cn.springcloud.sample.service;

import cn.springcloud.sample.repository.ClientRepository;
import cn.springcloud.sample.config.LoggerConfig;
import cn.springcloud.sample.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public Client addClient(Client c){
        clientRepository.save(c);
        return c;
    }

    public List<Client> getAll() {
        return clientRepository.findAll();
    }

    public Client getClientById(Integer id) {
        return clientRepository.findById(id).orElse(null);
    }

    public void deleteClientById(Integer id) {
        Client clientToDelete = getClientById(id);
        if (!clientToDelete.equals(null)) {
            clientRepository.delete(clientToDelete);
        } else {
            LoggerConfig.LOGGER.error("The Client doesn't exist");
        }
    }

}
