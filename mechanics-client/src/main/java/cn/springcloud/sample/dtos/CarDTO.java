package cn.springcloud.sample.dtos;

import cn.springcloud.sample.model.Client;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CarDTO {

    @JsonProperty("car-patent")
    private String patent;
    @JsonProperty("car-brand")
    private String brand;
    @JsonProperty("car-model")
    private String model;
    @JsonProperty("car-year")
    private Integer year;
    private Client client;
}
