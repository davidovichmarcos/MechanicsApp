package cn.springcloud.sample.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String detail;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate date;
    private Long totalPrice;
    private Long workPrice;
    private Long sparePrice;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car", referencedColumnName = "id")
    private Car car;
}