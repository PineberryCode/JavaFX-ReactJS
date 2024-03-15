package com.example;

import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

public class PrimaryController implements Initializable {

    @FXML
    private WebView webView;

    private WebEngine engine;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {
        engine = webView.getEngine();
        loadPage();
    }

    private void loadPage() {
        engine.load(getClass().getResource("/com/example/index.html").toString());
        System.out.println("Class: "+getClass());
        System.out.println("Resource: "+getClass().getResource("/com/example"));
    }
}
