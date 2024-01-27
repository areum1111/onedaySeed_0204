package com.store.onedaySeed.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class HostController {

    @GetMapping("/api/hostLogin")
    @ResponseBody
    public String hostLogin(){

        return "hostlogin";
    }

    @PostMapping("/api/hostLogin")
    public String hostLoginPost(){

        return "hostloginPost";
    }


    @GetMapping("/api/hostNew")
    @ResponseBody
    public String hostNew(){
        return "newHostGET";
    }

    @PostMapping ("/api/hostNew")
    public String hostNewPost(){
        return "newHostGET";
    }
}
