package gwt.material.design.demo.client.application.addins.timepickers;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.*;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.addins.client.timepicker.MaterialTimePicker;
import gwt.material.design.client.ui.MaterialToast;

import javax.inject.Inject;
import java.util.Date;


public class TimePickersView extends ViewImpl implements TimePickersPresenter.MyView {
    interface Binder extends UiBinder<Widget, TimePickersView> {
    }

    @UiField
    MaterialTimePicker tpEvents, tpClear;

    @Inject
    TimePickersView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        // Open Handler
        tpEvents.addOpenHandler(new OpenHandler<Date>() {
            @Override
            public void onOpen(OpenEvent<Date> event) {
                MaterialToast.fireToast("Opened Time Picker");
            }
        });
        // Close Handler
        tpEvents.addCloseHandler(new CloseHandler<Date>() {
            @Override
            public void onClose(CloseEvent<Date> event) {
                MaterialToast.fireToast("Closed Time Picker");
            }
        });
        // ValueChange Handler
        tpEvents.addValueChangeHandler(new ValueChangeHandler<Date>() {
            @Override
            public void onValueChange(ValueChangeEvent<Date> event) {
                DateTimeFormat dtf = DateTimeFormat.getFormat("hh:mm a");
                Date time = event.getValue();
                MaterialToast.fireToast("MaterialTimePicker value changed to: " + dtf.format(time));
            }
        });
    }

    @UiHandler("btnClear")
    void onClear(ClickEvent e){
        tpClear.clear();
    }
}
