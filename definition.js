Blockly.Blocks["xbot_mq_sensor"] = {
  init: function () {
    this.jsonInit({
      colour: "#ae00ae",
      tooltip: "",
      message0: "đọc giá trị %3 cảm biến cổng %1 pin %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "1"],
            ["2", "2"],
          ],
        },
        {
              type: "field_dropdown",
              name: "PARAM",
              options: [
                ["mg/l", "MG/L"],
                ["ppm", "PPM"],
                ["analog", "ANALOG"],
                ],
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

  Blockly.Python["xbot_mq_sensor"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
    var dropdown_data = block.getFieldValue('PARAM');
    Blockly.Python.definitions_['import_mq'] = 'from mq import MQ';
    Blockly.Python.definitions_["import_create_mq"] = 'mq = MQ(Pin(pin' + port + pin + '.adc_pin)) # analog PIN';
    // TODO: Assemble Python into code variable.
    var code = "";
    if (dropdown_data == "PPM")
      code = "mq.get_ppm()";
    else if (dropdown_data == "MG/L")
      code = "mq.get_acohol()";
    else if (dropdown_data == "ANALOG")
      code = "pin" + port + pin +".read_analog()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

