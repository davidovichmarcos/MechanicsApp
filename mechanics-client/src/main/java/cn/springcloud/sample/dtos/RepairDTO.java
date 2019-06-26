package cn.springcloud.sample.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;

public class RepairDTO {

    @JsonProperty("repair-id")
    private Integer id;
    @JsonProperty("repair-detail")
    private String detail;
    @JsonProperty("repair-date")
    private Date date;
    @JsonProperty("repair-total-price")
    private Long totalPrice;
    @JsonProperty("repair-work-price")
    private Long workPrice;
    private Long sparePrice;
}
