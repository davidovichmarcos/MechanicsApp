package cn.springcloud.sample.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClientDTO {

    @JsonProperty("client-id")
    private Integer id;

    @JsonProperty("client-name")
    private String name;

    @JsonProperty("client-lastName")
    private String lastName;
    @JsonProperty("")
    private String phone;
    private String email;
    private String address;
}
