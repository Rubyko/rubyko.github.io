package gwt.material.design.demo.client.application;

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


import com.google.gwt.user.client.Window;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.presenter.slots.NestedSlot;
import com.gwtplatform.mvp.client.proxy.NavigationEvent;
import com.gwtplatform.mvp.client.proxy.NavigationHandler;
import com.gwtplatform.mvp.client.proxy.Proxy;
import gwt.material.design.demo.client.event.SetPageTitleEvent;

import javax.inject.Inject;

public class ApplicationPresenter extends Presenter<ApplicationPresenter.MyView, ApplicationPresenter.MyProxy>
        implements SetPageTitleEvent.SetPageTitleHandler, NavigationHandler {
    public interface MyView extends View {
        void setPageTitle(String title, String description);
    }

    public static final NestedSlot SLOT_MainContent = new NestedSlot();

    @ProxyStandard
    public interface MyProxy extends Proxy<ApplicationPresenter> {
    }

    @Inject
    ApplicationPresenter(EventBus eventBus, MyView view, MyProxy proxy) {
        super(eventBus, view, proxy, RevealType.Root);
    }

    @Override
    protected void onBind() {
        super.onBind();

        addRegisteredHandler(SetPageTitleEvent.TYPE, this);
        addRegisteredHandler(NavigationEvent.getType(), this);
    }

    @Override
    protected void onReveal() {
        super.onReveal();
    }

    @Override
    public void onSetPageTitle(SetPageTitleEvent event) {
        getView().setPageTitle(event.getTitle(), event.getDescription());
    }

    @Override
    public void onNavigation(NavigationEvent navigationEvent) {
        Window.scrollTo(0, 0);
    }
}
