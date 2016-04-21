package gwt.material.design.demo.client.application.components.sidenavs;

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


import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.presenter.slots.NestedSlot;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import gwt.material.design.demo.client.application.ApplicationPresenter;
import gwt.material.design.demo.client.event.SetPageTitleEvent;
import gwt.material.design.demo.client.place.NameTokens;

public class SideNavsPresenter extends Presenter<SideNavsPresenter.MyView, SideNavsPresenter.MyProxy> {
    interface MyView extends View {
    }

    @NameToken(NameTokens.sidenavs)
    @ProxyStandard
    interface MyProxy extends ProxyPlace<SideNavsPresenter> {
    }

    public static final NestedSlot SLOT_SIDENAVS = new NestedSlot();

    @Inject
    SideNavsPresenter(
            EventBus eventBus,
            MyView view,
            MyProxy proxy) {
        super(eventBus, view, proxy, ApplicationPresenter.SLOT_MainContent);

    }

    @Override
    protected void onReveal() {
        super.onReveal();

        SetPageTitleEvent.fire("SideNavs", "Scrollspy is a jQuery plugin that tracks certain elements " +
                "and which element the user's screen is currently centered on. Our main demo of this is our " +
                "table of contents on every documentation page to the right. Clicking on these links will also " +
                "scroll the page to that element.", this);
    }

}
