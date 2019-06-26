package cn.springcloud.sample.service;

import cn.springcloud.sample.repository.CarRepository;
import cn.springcloud.sample.config.LoggerConfig;
import cn.springcloud.sample.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    CarRepository carRepository;

    public Car saveCar(Car c ){
        carRepository.save(c);
        return c;
    }

    public List<Car> getAll(){
        return carRepository.findAll();
    }

    public Car getCarById(Integer id) {
        return carRepository.findById(id).orElse(null);
    }

    public void deleteCarById(Integer id) {
        Car carToDelete = getCarById(id);
        if (!carToDelete.equals(null)) {
            carRepository.delete(carToDelete);
        } else {
            LoggerConfig.LOGGER.error("The Car doesn't exist");
        }
    }

}
